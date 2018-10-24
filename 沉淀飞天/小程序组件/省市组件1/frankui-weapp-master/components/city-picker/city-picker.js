Component({
  properties: {
    value: {
      type: Array,
      value: [],
      observer: "onValue"
    },
    isShow: {
      type: Boolean,
      value: false,
      observer: "onShow"
    }
  },

  data: {
    provinces: [{
      "province_code": "110000",
      "city_list": [{
        "city_name": "市辖区",
        "city_code": "110100"
      }],
      "province_name": "北京市"
    }, {
      "province_code": "120000",
      "city_list": [{
        "city_name": "市辖区",
        "city_code": "120100"
      }],
      "province_name": "天津市"
    }, {
      "province_code": "130000",
      "city_list": [{
        "city_name": "石家庄市",
        "city_code": "130100"
      }, {
        "city_name": "唐山市",
        "city_code": "130200"
      }, {
        "city_name": "秦皇岛市",
        "city_code": "130300"
      }, {
        "city_name": "邯郸市",
        "city_code": "130400"
      }, {
        "city_name": "邢台市",
        "city_code": "130500"
      }, {
        "city_name": "保定市",
        "city_code": "130600"
      }, {
        "city_name": "张家口市",
        "city_code": "130700"
      }, {
        "city_name": "承德市",
        "city_code": "130800"
      }, {
        "city_name": "沧州市",
        "city_code": "130900"
      }, {
        "city_name": "廊坊市",
        "city_code": "131000"
      }, {
        "city_name": "衡水市",
        "city_code": "131100"
      }, {
        "city_name": "省直辖县级行政区划",
        "city_code": "139000"
      }],
      "province_name": "河北省"
    }, {
      "province_code": "140000",
      "city_list": [{
        "city_name": "太原市",
        "city_code": "140100"
      }, {
        "city_name": "大同市",
        "city_code": "140200"
      }, {
        "city_name": "阳泉市",
        "city_code": "140300"
      }, {
        "city_name": "长治市",
        "city_code": "140400"
      }, {
        "city_name": "晋城市",
        "city_code": "140500"
      }, {
        "city_name": "朔州市",
        "city_code": "140600"
      }, {
        "city_name": "晋中市",
        "city_code": "140700"
      }, {
        "city_name": "运城市",
        "city_code": "140800"
      }, {
        "city_name": "忻州市",
        "city_code": "140900"
      }, {
        "city_name": "临汾市",
        "city_code": "141000"
      }, {
        "city_name": "吕梁市",
        "city_code": "141100"
      }],
      "province_name": "山西省"
    }, {
      "province_code": "150000",
      "city_list": [{
        "city_name": "呼和浩特市",
        "city_code": "150100"
      }, {
        "city_name": "包头市",
        "city_code": "150200"
      }, {
        "city_name": "乌海市",
        "city_code": "150300"
      }, {
        "city_name": "赤峰市",
        "city_code": "150400"
      }, {
        "city_name": "通辽市",
        "city_code": "150500"
      }, {
        "city_name": "鄂尔多斯市",
        "city_code": "150600"
      }, {
        "city_name": "呼伦贝尔市",
        "city_code": "150700"
      }, {
        "city_name": "巴彦淖尔市",
        "city_code": "150800"
      }, {
        "city_name": "乌兰察布市",
        "city_code": "150900"
      }, {
        "city_name": "兴安盟",
        "city_code": "152200"
      }, {
        "city_name": "锡林郭勒盟",
        "city_code": "152500"
      }, {
        "city_name": "阿拉善盟",
        "city_code": "152900"
      }],
      "province_name": "内蒙古自治区"
    }, {
      "province_code": "210000",
      "city_list": [{
        "city_name": "沈阳市",
        "city_code": "210100"
      }, {
        "city_name": "大连市",
        "city_code": "210200"
      }, {
        "city_name": "鞍山市",
        "city_code": "210300"
      }, {
        "city_name": "抚顺市",
        "city_code": "210400"
      }, {
        "city_name": "本溪市",
        "city_code": "210500"
      }, {
        "city_name": "丹东市",
        "city_code": "210600"
      }, {
        "city_name": "锦州市",
        "city_code": "210700"
      }, {
        "city_name": "营口市",
        "city_code": "210800"
      }, {
        "city_name": "阜新市",
        "city_code": "210900"
      }, {
        "city_name": "辽阳市",
        "city_code": "211000"
      }, {
        "city_name": "盘锦市",
        "city_code": "211100"
      }, {
        "city_name": "铁岭市",
        "city_code": "211200"
      }, {
        "city_name": "朝阳市",
        "city_code": "211300"
      }, {
        "city_name": "葫芦岛市",
        "city_code": "211400"
      }],
      "province_name": "辽宁省"
    }, {
      "province_code": "220000",
      "city_list": [{
        "city_name": "长春市",
        "city_code": "220100"
      }, {
        "city_name": "吉林市",
        "city_code": "220200"
      }, {
        "city_name": "四平市",
        "city_code": "220300"
      }, {
        "city_name": "辽源市",
        "city_code": "220400"
      }, {
        "city_name": "通化市",
        "city_code": "220500"
      }, {
        "city_name": "白山市",
        "city_code": "220600"
      }, {
        "city_name": "松原市",
        "city_code": "220700"
      }, {
        "city_name": "白城市",
        "city_code": "220800"
      }, {
        "city_name": "延边朝鲜族自治州",
        "city_code": "222400"
      }],
      "province_name": "吉林省"
    }, {
      "province_code": "230000",
      "city_list": [{
        "city_name": "哈尔滨市",
        "city_code": "230100"
      }, {
        "city_name": "齐齐哈尔市",
        "city_code": "230200"
      }, {
        "city_name": "鸡西市",
        "city_code": "230300"
      }, {
        "city_name": "鹤岗市",
        "city_code": "230400"
      }, {
        "city_name": "双鸭山市",
        "city_code": "230500"
      }, {
        "city_name": "大庆市",
        "city_code": "230600"
      }, {
        "city_name": "伊春市",
        "city_code": "230700"
      }, {
        "city_name": "佳木斯市",
        "city_code": "230800"
      }, {
        "city_name": "七台河市",
        "city_code": "230900"
      }, {
        "city_name": "牡丹江市",
        "city_code": "231000"
      }, {
        "city_name": "黑河市",
        "city_code": "231100"
      }, {
        "city_name": "绥化市",
        "city_code": "231200"
      }, {
        "city_name": "大兴安岭地区",
        "city_code": "232700"
      }],
      "province_name": "黑龙江省"
    }, {
      "province_code": "310000",
      "city_list": [{
        "city_name": "市辖区",
        "city_code": "310100"
      }],
      "province_name": "上海市"
    }, {
      "province_code": "320000",
      "city_list": [{
        "city_name": "南京市",
        "city_code": "320100"
      }, {
        "city_name": "无锡市",
        "city_code": "320200"
      }, {
        "city_name": "徐州市",
        "city_code": "320300"
      }, {
        "city_name": "常州市",
        "city_code": "320400"
      }, {
        "city_name": "苏州市",
        "city_code": "320500"
      }, {
        "city_name": "南通市",
        "city_code": "320600"
      }, {
        "city_name": "连云港市",
        "city_code": "320700"
      }, {
        "city_name": "淮安市",
        "city_code": "320800"
      }, {
        "city_name": "盐城市",
        "city_code": "320900"
      }, {
        "city_name": "扬州市",
        "city_code": "321000"
      }, {
        "city_name": "镇江市",
        "city_code": "321100"
      }, {
        "city_name": "泰州市",
        "city_code": "321200"
      }, {
        "city_name": "宿迁市",
        "city_code": "321300"
      }],
      "province_name": "江苏省"
    }, {
      "province_code": "330000",
      "city_list": [{
        "city_name": "杭州市",
        "city_code": "330100"
      }, {
        "city_name": "宁波市",
        "city_code": "330200"
      }, {
        "city_name": "温州市",
        "city_code": "330300"
      }, {
        "city_name": "嘉兴市",
        "city_code": "330400"
      }, {
        "city_name": "湖州市",
        "city_code": "330500"
      }, {
        "city_name": "绍兴市",
        "city_code": "330600"
      }, {
        "city_name": "金华市",
        "city_code": "330700"
      }, {
        "city_name": "衢州市",
        "city_code": "330800"
      }, {
        "city_name": "舟山市",
        "city_code": "330900"
      }, {
        "city_name": "台州市",
        "city_code": "331000"
      }, {
        "city_name": "丽水市",
        "city_code": "331100"
      }],
      "province_name": "浙江省"
    }, {
      "province_code": "340000",
      "city_list": [{
        "city_name": "合肥市",
        "city_code": "340100"
      }, {
        "city_name": "芜湖市",
        "city_code": "340200"
      }, {
        "city_name": "蚌埠市",
        "city_code": "340300"
      }, {
        "city_name": "淮南市",
        "city_code": "340400"
      }, {
        "city_name": "马鞍山市",
        "city_code": "340500"
      }, {
        "city_name": "淮北市",
        "city_code": "340600"
      }, {
        "city_name": "铜陵市",
        "city_code": "340700"
      }, {
        "city_name": "安庆市",
        "city_code": "340800"
      }, {
        "city_name": "黄山市",
        "city_code": "341000"
      }, {
        "city_name": "滁州市",
        "city_code": "341100"
      }, {
        "city_name": "阜阳市",
        "city_code": "341200"
      }, {
        "city_name": "宿州市",
        "city_code": "341300"
      }, {
        "city_name": "六安市",
        "city_code": "341500"
      }, {
        "city_name": "亳州市",
        "city_code": "341600"
      }, {
        "city_name": "池州市",
        "city_code": "341700"
      }, {
        "city_name": "宣城市",
        "city_code": "341800"
      }],
      "province_name": "安徽省"
    }, {
      "province_code": "350000",
      "city_list": [{
        "city_name": "福州市",
        "city_code": "350100"
      }, {
        "city_name": "厦门市",
        "city_code": "350200"
      }, {
        "city_name": "莆田市",
        "city_code": "350300"
      }, {
        "city_name": "三明市",
        "city_code": "350400"
      }, {
        "city_name": "泉州市",
        "city_code": "350500"
      }, {
        "city_name": "漳州市",
        "city_code": "350600"
      }, {
        "city_name": "南平市",
        "city_code": "350700"
      }, {
        "city_name": "龙岩市",
        "city_code": "350800"
      }, {
        "city_name": "宁德市",
        "city_code": "350900"
      }],
      "province_name": "福建省"
    }, {
      "province_code": "360000",
      "city_list": [{
        "city_name": "南昌市",
        "city_code": "360100"
      }, {
        "city_name": "景德镇市",
        "city_code": "360200"
      }, {
        "city_name": "萍乡市",
        "city_code": "360300"
      }, {
        "city_name": "九江市",
        "city_code": "360400"
      }, {
        "city_name": "新余市",
        "city_code": "360500"
      }, {
        "city_name": "鹰潭市",
        "city_code": "360600"
      }, {
        "city_name": "赣州市",
        "city_code": "360700"
      }, {
        "city_name": "吉安市",
        "city_code": "360800"
      }, {
        "city_name": "宜春市",
        "city_code": "360900"
      }, {
        "city_name": "抚州市",
        "city_code": "361000"
      }, {
        "city_name": "上饶市",
        "city_code": "361100"
      }],
      "province_name": "江西省"
    }, {
      "province_code": "370000",
      "city_list": [{
        "city_name": "济南市",
        "city_code": "370100"
      }, {
        "city_name": "青岛市",
        "city_code": "370200"
      }, {
        "city_name": "淄博市",
        "city_code": "370300"
      }, {
        "city_name": "枣庄市",
        "city_code": "370400"
      }, {
        "city_name": "东营市",
        "city_code": "370500"
      }, {
        "city_name": "烟台市",
        "city_code": "370600"
      }, {
        "city_name": "潍坊市",
        "city_code": "370700"
      }, {
        "city_name": "济宁市",
        "city_code": "370800"
      }, {
        "city_name": "泰安市",
        "city_code": "370900"
      }, {
        "city_name": "威海市",
        "city_code": "371000"
      }, {
        "city_name": "日照市",
        "city_code": "371100"
      }, {
        "city_name": "莱芜市",
        "city_code": "371200"
      }, {
        "city_name": "临沂市",
        "city_code": "371300"
      }, {
        "city_name": "德州市",
        "city_code": "371400"
      }, {
        "city_name": "聊城市",
        "city_code": "371500"
      }, {
        "city_name": "滨州市",
        "city_code": "371600"
      }, {
        "city_name": "菏泽市",
        "city_code": "371700"
      }],
      "province_name": "山东省"
    }, {
      "province_code": "410000",
      "city_list": [{
        "city_name": "郑州市",
        "city_code": "410100"
      }, {
        "city_name": "开封市",
        "city_code": "410200"
      }, {
        "city_name": "洛阳市",
        "city_code": "410300"
      }, {
        "city_name": "平顶山市",
        "city_code": "410400"
      }, {
        "city_name": "安阳市",
        "city_code": "410500"
      }, {
        "city_name": "鹤壁市",
        "city_code": "410600"
      }, {
        "city_name": "新乡市",
        "city_code": "410700"
      }, {
        "city_name": "焦作市",
        "city_code": "410800"
      }, {
        "city_name": "濮阳市",
        "city_code": "410900"
      }, {
        "city_name": "许昌市",
        "city_code": "411000"
      }, {
        "city_name": "漯河市",
        "city_code": "411100"
      }, {
        "city_name": "三门峡市",
        "city_code": "411200"
      }, {
        "city_name": "南阳市",
        "city_code": "411300"
      }, {
        "city_name": "商丘市",
        "city_code": "411400"
      }, {
        "city_name": "信阳市",
        "city_code": "411500"
      }, {
        "city_name": "周口市",
        "city_code": "411600"
      }, {
        "city_name": "驻马店市",
        "city_code": "411700"
      }, {
        "city_name": "省直辖县级行政区划",
        "city_code": "419000"
      }],
      "province_name": "河南省"
    }, {
      "province_code": "420000",
      "city_list": [{
        "city_name": "武汉市",
        "city_code": "420100"
      }, {
        "city_name": "黄石市",
        "city_code": "420200"
      }, {
        "city_name": "十堰市",
        "city_code": "420300"
      }, {
        "city_name": "宜昌市",
        "city_code": "420500"
      }, {
        "city_name": "襄阳市",
        "city_code": "420600"
      }, {
        "city_name": "鄂州市",
        "city_code": "420700"
      }, {
        "city_name": "荆门市",
        "city_code": "420800"
      }, {
        "city_name": "孝感市",
        "city_code": "420900"
      }, {
        "city_name": "荆州市",
        "city_code": "421000"
      }, {
        "city_name": "黄冈市",
        "city_code": "421100"
      }, {
        "city_name": "咸宁市",
        "city_code": "421200"
      }, {
        "city_name": "随州市",
        "city_code": "421300"
      }, {
        "city_name": "恩施土家族苗族自治州",
        "city_code": "422800"
      }, {
        "city_name": "省直辖县级行政区划",
        "city_code": "429000"
      }],
      "province_name": "湖北省"
    }, {
      "province_code": "430000",
      "city_list": [{
        "city_name": "长沙市",
        "city_code": "430100"
      }, {
        "city_name": "株洲市",
        "city_code": "430200"
      }, {
        "city_name": "湘潭市",
        "city_code": "430300"
      }, {
        "city_name": "衡阳市",
        "city_code": "430400"
      }, {
        "city_name": "邵阳市",
        "city_code": "430500"
      }, {
        "city_name": "岳阳市",
        "city_code": "430600"
      }, {
        "city_name": "常德市",
        "city_code": "430700"
      }, {
        "city_name": "张家界市",
        "city_code": "430800"
      }, {
        "city_name": "益阳市",
        "city_code": "430900"
      }, {
        "city_name": "郴州市",
        "city_code": "431000"
      }, {
        "city_name": "永州市",
        "city_code": "431100"
      }, {
        "city_name": "怀化市",
        "city_code": "431200"
      }, {
        "city_name": "娄底市",
        "city_code": "431300"
      }, {
        "city_name": "湘西土家族苗族自治州",
        "city_code": "433100"
      }],
      "province_name": "湖南省"
    }, {
      "province_code": "440000",
      "city_list": [{
        "city_name": "广州市",
        "city_code": "440100"
      }, {
        "city_name": "韶关市",
        "city_code": "440200"
      }, {
        "city_name": "深圳市",
        "city_code": "440300"
      }, {
        "city_name": "珠海市",
        "city_code": "440400"
      }, {
        "city_name": "汕头市",
        "city_code": "440500"
      }, {
        "city_name": "佛山市",
        "city_code": "440600"
      }, {
        "city_name": "江门市",
        "city_code": "440700"
      }, {
        "city_name": "湛江市",
        "city_code": "440800"
      }, {
        "city_name": "茂名市",
        "city_code": "440900"
      }, {
        "city_name": "肇庆市",
        "city_code": "441200"
      }, {
        "city_name": "惠州市",
        "city_code": "441300"
      }, {
        "city_name": "梅州市",
        "city_code": "441400"
      }, {
        "city_name": "汕尾市",
        "city_code": "441500"
      }, {
        "city_name": "河源市",
        "city_code": "441600"
      }, {
        "city_name": "阳江市",
        "city_code": "441700"
      }, {
        "city_name": "清远市",
        "city_code": "441800"
      }, {
        "city_name": "东莞市",
        "city_code": "441900"
      }, {
        "city_name": "中山市",
        "city_code": "442000"
      }, {
        "city_name": "潮州市",
        "city_code": "445100"
      }, {
        "city_name": "揭阳市",
        "city_code": "445200"
      }, {
        "city_name": "云浮市",
        "city_code": "445300"
      }],
      "province_name": "广东省"
    }, {
      "province_code": "450000",
      "city_list": [{
        "city_name": "南宁市",
        "city_code": "450100"
      }, {
        "city_name": "柳州市",
        "city_code": "450200"
      }, {
        "city_name": "桂林市",
        "city_code": "450300"
      }, {
        "city_name": "梧州市",
        "city_code": "450400"
      }, {
        "city_name": "北海市",
        "city_code": "450500"
      }, {
        "city_name": "防城港市",
        "city_code": "450600"
      }, {
        "city_name": "钦州市",
        "city_code": "450700"
      }, {
        "city_name": "贵港市",
        "city_code": "450800"
      }, {
        "city_name": "玉林市",
        "city_code": "450900"
      }, {
        "city_name": "百色市",
        "city_code": "451000"
      }, {
        "city_name": "贺州市",
        "city_code": "451100"
      }, {
        "city_name": "河池市",
        "city_code": "451200"
      }, {
        "city_name": "来宾市",
        "city_code": "451300"
      }, {
        "city_name": "崇左市",
        "city_code": "451400"
      }],
      "province_name": "广西壮族自治区"
    }, {
      "province_code": "460000",
      "city_list": [{
        "city_name": "海口市",
        "city_code": "460100"
      }, {
        "city_name": "三亚市",
        "city_code": "460200"
      }, {
        "city_name": "三沙市",
        "city_code": "460300"
      }, {
        "city_name": "儋州市",
        "city_code": "460400"
      }, {
        "city_name": "省直辖县级行政区划",
        "city_code": "469000"
      }],
      "province_name": "海南省"
    }, {
      "province_code": "500000",
      "city_list": [{
        "city_name": "市辖区",
        "city_code": "500100"
      }, {
        "city_name": "县",
        "city_code": "500200"
      }],
      "province_name": "重庆市"
    }, {
      "province_code": "510000",
      "city_list": [{
        "city_name": "成都市",
        "city_code": "510100"
      }, {
        "city_name": "自贡市",
        "city_code": "510300"
      }, {
        "city_name": "攀枝花市",
        "city_code": "510400"
      }, {
        "city_name": "泸州市",
        "city_code": "510500"
      }, {
        "city_name": "德阳市",
        "city_code": "510600"
      }, {
        "city_name": "绵阳市",
        "city_code": "510700"
      }, {
        "city_name": "广元市",
        "city_code": "510800"
      }, {
        "city_name": "遂宁市",
        "city_code": "510900"
      }, {
        "city_name": "内江市",
        "city_code": "511000"
      }, {
        "city_name": "乐山市",
        "city_code": "511100"
      }, {
        "city_name": "南充市",
        "city_code": "511300"
      }, {
        "city_name": "眉山市",
        "city_code": "511400"
      }, {
        "city_name": "宜宾市",
        "city_code": "511500"
      }, {
        "city_name": "广安市",
        "city_code": "511600"
      }, {
        "city_name": "达州市",
        "city_code": "511700"
      }, {
        "city_name": "雅安市",
        "city_code": "511800"
      }, {
        "city_name": "巴中市",
        "city_code": "511900"
      }, {
        "city_name": "资阳市",
        "city_code": "512000"
      }, {
        "city_name": "阿坝藏族羌族自治州",
        "city_code": "513200"
      }, {
        "city_name": "甘孜藏族自治州",
        "city_code": "513300"
      }, {
        "city_name": "凉山彝族自治州",
        "city_code": "513400"
      }],
      "province_name": "四川省"
    }, {
      "province_code": "520000",
      "city_list": [{
        "city_name": "贵阳市",
        "city_code": "520100"
      }, {
        "city_name": "六盘水市",
        "city_code": "520200"
      }, {
        "city_name": "遵义市",
        "city_code": "520300"
      }, {
        "city_name": "安顺市",
        "city_code": "520400"
      }, {
        "city_name": "毕节市",
        "city_code": "520500"
      }, {
        "city_name": "铜仁市",
        "city_code": "520600"
      }, {
        "city_name": "黔西南布依族苗族自治州",
        "city_code": "522300"
      }, {
        "city_name": "黔东南苗族侗族自治州",
        "city_code": "522600"
      }, {
        "city_name": "黔南布依族苗族自治州",
        "city_code": "522700"
      }],
      "province_name": "贵州省"
    }, {
      "province_code": "530000",
      "city_list": [{
        "city_name": "昆明市",
        "city_code": "530100"
      }, {
        "city_name": "曲靖市",
        "city_code": "530300"
      }, {
        "city_name": "玉溪市",
        "city_code": "530400"
      }, {
        "city_name": "保山市",
        "city_code": "530500"
      }, {
        "city_name": "昭通市",
        "city_code": "530600"
      }, {
        "city_name": "丽江市",
        "city_code": "530700"
      }, {
        "city_name": "普洱市",
        "city_code": "530800"
      }, {
        "city_name": "临沧市",
        "city_code": "530900"
      }, {
        "city_name": "楚雄彝族自治州",
        "city_code": "532300"
      }, {
        "city_name": "红河哈尼族彝族自治州",
        "city_code": "532500"
      }, {
        "city_name": "文山壮族苗族自治州",
        "city_code": "532600"
      }, {
        "city_name": "西双版纳傣族自治州",
        "city_code": "532800"
      }, {
        "city_name": "大理白族自治州",
        "city_code": "532900"
      }, {
        "city_name": "德宏傣族景颇族自治州",
        "city_code": "533100"
      }, {
        "city_name": "怒江傈僳族自治州",
        "city_code": "533300"
      }, {
        "city_name": "迪庆藏族自治州",
        "city_code": "533400"
      }],
      "province_name": "云南省"
    }, {
      "province_code": "540000",
      "city_list": [{
        "city_name": "拉萨市",
        "city_code": "540100"
      }, {
        "city_name": "日喀则市",
        "city_code": "540200"
      }, {
        "city_name": "昌都市",
        "city_code": "540300"
      }, {
        "city_name": "林芝市",
        "city_code": "540400"
      }, {
        "city_name": "山南市",
        "city_code": "540500"
      }, {
        "city_name": "那曲地区",
        "city_code": "542400"
      }, {
        "city_name": "阿里地区",
        "city_code": "542500"
      }],
      "province_name": "西藏自治区"
    }, {
      "province_code": "610000",
      "city_list": [{
        "city_name": "西安市",
        "city_code": "610100"
      }, {
        "city_name": "铜川市",
        "city_code": "610200"
      }, {
        "city_name": "宝鸡市",
        "city_code": "610300"
      }, {
        "city_name": "咸阳市",
        "city_code": "610400"
      }, {
        "city_name": "渭南市",
        "city_code": "610500"
      }, {
        "city_name": "延安市",
        "city_code": "610600"
      }, {
        "city_name": "汉中市",
        "city_code": "610700"
      }, {
        "city_name": "榆林市",
        "city_code": "610800"
      }, {
        "city_name": "安康市",
        "city_code": "610900"
      }, {
        "city_name": "商洛市",
        "city_code": "611000"
      }],
      "province_name": "陕西省"
    }, {
      "province_code": "620000",
      "city_list": [{
        "city_name": "兰州市",
        "city_code": "620100"
      }, {
        "city_name": "嘉峪关市",
        "city_code": "620200"
      }, {
        "city_name": "金昌市",
        "city_code": "620300"
      }, {
        "city_name": "白银市",
        "city_code": "620400"
      }, {
        "city_name": "天水市",
        "city_code": "620500"
      }, {
        "city_name": "武威市",
        "city_code": "620600"
      }, {
        "city_name": "张掖市",
        "city_code": "620700"
      }, {
        "city_name": "平凉市",
        "city_code": "620800"
      }, {
        "city_name": "酒泉市",
        "city_code": "620900"
      }, {
        "city_name": "庆阳市",
        "city_code": "621000"
      }, {
        "city_name": "定西市",
        "city_code": "621100"
      }, {
        "city_name": "陇南市",
        "city_code": "621200"
      }, {
        "city_name": "临夏回族自治州",
        "city_code": "622900"
      }, {
        "city_name": "甘南藏族自治州",
        "city_code": "623000"
      }],
      "province_name": "甘肃省"
    }, {
      "province_code": "630000",
      "city_list": [{
        "city_name": "西宁市",
        "city_code": "630100"
      }, {
        "city_name": "海东市",
        "city_code": "630200"
      }, {
        "city_name": "海北藏族自治州",
        "city_code": "632200"
      }, {
        "city_name": "黄南藏族自治州",
        "city_code": "632300"
      }, {
        "city_name": "海南藏族自治州",
        "city_code": "632500"
      }, {
        "city_name": "果洛藏族自治州",
        "city_code": "632600"
      }, {
        "city_name": "玉树藏族自治州",
        "city_code": "632700"
      }, {
        "city_name": "海西蒙古族藏族自治州",
        "city_code": "632800"
      }],
      "province_name": "青海省"
    }, {
      "province_code": "640000",
      "city_list": [{
        "city_name": "银川市",
        "city_code": "640100"
      }, {
        "city_name": "石嘴山市",
        "city_code": "640200"
      }, {
        "city_name": "吴忠市",
        "city_code": "640300"
      }, {
        "city_name": "固原市",
        "city_code": "640400"
      }, {
        "city_name": "中卫市",
        "city_code": "640500"
      }],
      "province_name": "宁夏回族自治区"
    }, {
      "province_code": "650000",
      "city_list": [{
        "city_name": "乌鲁木齐市",
        "city_code": "650100"
      }, {
        "city_name": "克拉玛依市",
        "city_code": "650200"
      }, {
        "city_name": "吐鲁番市",
        "city_code": "650400"
      }, {
        "city_name": "哈密市",
        "city_code": "650500"
      }, {
        "city_name": "昌吉回族自治州",
        "city_code": "652300"
      }, {
        "city_name": "博尔塔拉蒙古自治州",
        "city_code": "652700"
      }, {
        "city_name": "巴音郭楞蒙古自治州",
        "city_code": "652800"
      }, {
        "city_name": "阿克苏地区",
        "city_code": "652900"
      }, {
        "city_name": "克孜勒苏柯尔克孜自治州",
        "city_code": "653000"
      }, {
        "city_name": "喀什地区",
        "city_code": "653100"
      }, {
        "city_name": "和田地区",
        "city_code": "653200"
      }, {
        "city_name": "伊犁哈萨克自治州",
        "city_code": "654000"
      }, {
        "city_name": "塔城地区",
        "city_code": "654200"
      }, {
        "city_name": "阿勒泰地区",
        "city_code": "654300"
      }, {
        "city_name": "自治区直辖县级行政区划",
        "city_code": "659000"
      }],
      "province_name": "新疆维吾尔自治区"
    }, {
      "province_code": "710000",
      "city_list": [{
        "city_name": "台湾",
        "city_code": "710100"
      }],
      "province_name": "台湾省"
    }, {
      "province_code": "810000",
      "city_list": [{
        "city_name": "香港",
        "city_code": "810100"
      }],
      "province_name": "香港特别行政区"
    }, {
      "province_code": "820000",
      "city_list": [{
        "city_name": "澳门",
        "city_code": "820100"
      }],
      "province_name": "澳门特别行政区"
    }],
    showPicker: false,
    tempProvincePos: [0],
    tempCityPos: [0]
  },

  attached: function () {
  
  },

  methods: {
    onTouchmask: function (event) {
    },
    onCacnelClick(e) {
      this.triggerEvent('cancelclick', {});
    },
    onSureClick(e) {
      var valueCode = [0, 0];
      var valueName = ['', ''];

      if (this.data.provinces != null && this.data.provinces.length > this.data.tempProvincePos) {
        if (this.data.provinces[this.data.tempProvincePos].city_list != null && this.data.provinces[this.data.tempProvincePos].city_list.length > this.data.tempCityPos) {
          valueCode = [this.data.provinces[this.data.tempProvincePos].province_code, this.data.provinces[this.data.tempProvincePos].city_list[this.data.tempCityPos].city_code];
          valueName = [this.data.provinces[this.data.tempProvincePos].province_name, this.data.provinces[this.data.tempProvincePos].city_list[this.data.tempCityPos].city_name];
        } else {
          valueCode = [this.data.provinces[this.data.tempProvincePos].province_code, 0];
          valueName = [this.data.provinces[this.data.tempProvincePos].province_name, ''];
        }
      }

      this.triggerEvent('sureclick', {
        valueCode: valueCode,
        valueName: valueName
      });

    },
    province_onChange: function (e) {
      this.setData({
        tempProvincePos: e.detail.value,
        tempCityPos: [0]
      });
    },
    city_onChange: function (e) {
      this.setData({
        tempCityPos: e.detail.value
      });
    },
    onValue() {
      //通过传进来的省份城市的code计算对应的index
      var tempProvincePos = 0;
      for (var i = 0; i < this.data.provinces.length; i++) {
        var item = this.data.provinces[i];
        if (item.province_code == this.data.value[0]) {
          tempProvincePos = i;
          break;
        }
      }
      var tempCityPos = 0;
      if (this.data.provinces.length > tempProvincePos) {
        var cityList = this.data.provinces[tempProvincePos].city_list;
        for (var i = 0; i < cityList.length; i++) {
          var item = cityList[i];
          if (item.city_code == this.data.value[1]) {
            tempCityPos = i;
            break;
          }
        }
      }
      this.setData({
        tempProvincePos: [tempProvincePos],
        tempCityPos: [tempCityPos]
      });
    },
    onShow() {
      this.setData({
        showPicker: this.data.isShow
      });
    }
  }
});