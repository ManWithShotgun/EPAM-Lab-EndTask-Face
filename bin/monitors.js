var fs          = require('fs');
var path        = require('path');
var util        = require('util');

var DATA_MONITORS = path.join(__dirname, 'data', 'monitors.json');
var PER_PAGE      = 10;

class MonirorsServ{
  DeleteMonitorHandler(req, res){
    console.log('delete id: '+req.params.id);
    res.json({success: true})
  }

  CreateMonitorHandler(req, res){
    console.log('Create JSON: '+req.body.json);
    res.json({success: true})
  }

  UpdateMonitorHandler(req, res){
    console.log('Edit JSON: '+req.body.json);
    console.log('Id: '+req.params.id)
    res.json({success: true})
  }

  monitorHandler(req, res){
    var items      = JSON.parse(fs.readFileSync(DATA_MONITORS));
    var id         = req.params.id;

    var item =items.find((item)=>{ return item.id==id});

    return res.json({product : item});
  }

  monitorsHandler(req, res){
    console.log(req.query.offset);
    var items          = JSON.parse(fs.readFileSync(DATA_MONITORS));
    var offset         = req.query.offset ? parseInt(req.query.offset, 10) : 0;
    var filter         = req.query.filter ? req.query.filter : undefined;
    var filterName     = req.query.filterName ? req.query.filterName : undefined;
    var nextOffset     = offset + PER_PAGE;
    var previousOffset = (offset - PER_PAGE < 1) ? 0 : offset - PER_PAGE;

    console.log('filter: '+filter+' | '+filterName);
    if(filter){
      items=items.filter((item)=>{ return item.inch==filter});
    }
    if(filterName){
      items=items.filter((item)=>{ return item.name.indexOf(filterName)>-1});
    }
    // console.log('items.length: '+items.length);

    var meta = {
      limit       : PER_PAGE,
      next        : util.format('?limit=%s&offset=%s', PER_PAGE, nextOffset),
      offset      : req.query.offset,
      previous    : util.format('?limit=%s&offset=%s', PER_PAGE, previousOffset),
      total_count : items.length
    };

    var json = {
      meta     : meta,
      products : getPaginatedItems(items, offset)
    };
    return res.json(json);
  }
}

function getPaginatedItems(items, offset) {
  return items.slice(offset, offset + PER_PAGE);
}

module.exports=new MonirorsServ();
