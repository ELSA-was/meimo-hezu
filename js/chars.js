/* ============ 角色与资源定义 ============ */
const CHARS={
  jqn:{name:'江祈年',img:'images/cq_nian.png',color:'#e0555e',title:'忠犬傲娇 · 保研学长 · 24岁',
    intro:'你的大学学长，大你两届，刚保研本校体育学院。赤发黑皮衣的刺头外表下是全601最藏不住话的笨蛋。小时候被人类家庭领养，拼了命伪装成"普通人"，最恨别人提他的角和尾巴——直到你搬进来。',
    trait:'赤红犄角 · 心形尾尖 · 嫌弃脸红二选一'},
  zy:{name:'陆知遥',img:'images/zhi_yao.png',color:'#f5a623',title:'小太阳白切黑 · 百万博主 · 23岁',
    intro:'宠物博主"遥遥子的日常"，粉丝三百万，笑容比太阳还亮，是601的团宠担当。但他手机里有一本加密相册，和一份"障碍物清单"——所有靠近你的人，都在清单上。',
    trait:'淡金犄角 · 金色桃心尾 · 笑起来眼睛弯弯'},
  wx:{name:'温叙',img:'images/wen_xu.png',color:'#8f7fae',title:'阴湿自卑粘人 · 深夜店员 · 27岁',
    intro:'深夜便利店的夜班店员，白天空闲时接一些没人要的插画外包。低阶魅魔，吸收爱欲的天赋几乎为零，只能给予、无法索取，常年在饥饿线上飘着。自卑到骨子里，却是全601最温柔的人。',
    trait:'墨色碎发 · 淡紫眼底 · 灰角灰尾总是耷拉着'},
  syb:{name:'沈聿白',img:'images/yu_bai.png',color:'#9ec5e8',title:'圣人私心 · 诊所医生 · 29岁',
    intro:'社区诊所的医生，601的房东——这间"魅魔互助公寓"就是他租下来专门收留付不起人类房租的穷魅魔。温声细语，有求必应，谁都以为他是圣人。只有他自己知道，他的无私，是精心伪装的狩猎姿势。',
    trait:'银白发 · 冰蓝眼 · 象牙色小角'},
  ly:{name:'黎野',img:'images/li_ye.png',color:'#c2455f',title:'烂人真心 · 乐队主唱 · 28岁',
    intro:'Livehouse驻唱乐队"野犬"的主唱，约会从不过夜、告白从不兑现的花名在外。嘴上没有一句真话，行动上却总在你需要的时候恰好出现。他不是不会真心，是不敢。',
    trait:'酒红卷发 · 琥珀眼 · 黑角黑尾懒得藏'},
  dm:{name:'冬淼',img:'images/dong_miao.png',color:'#7ec8e8',title:'主控 · 小魅魔 · 22岁',
    intro:'从地下城"渊底"来地面读大学的小魅魔，今年刚毕业。金发蓝眼，头顶浅紫小角，尾椎拖着粉红桃心尾。穷、馋、爱撒娇，人生目标是吃饱和被爱。',
    trait:'金发蓝眼 · 浅紫小角 · 桃心尾会出卖心情'},
  la:{name:'聆桉',img:'images/li_ye.png',color:'#7ed6a0',title:'客串 · 前辈魅魔 · 三冠影帝',
    intro:'隔壁602的新住户，娱乐圈第一个公开魅魔身份的三冠影帝。毒舌腹黑，一眼看穿你的底细，懒得拆穿。（客串自《小魅魔合租记》原案）',
    trait:'浅绿发 · 紫眸 · 青角紫尾'}
};
const BG={
  title:'images/title.png', black:'images/bg_city.png',
  city:'images/bg_city.png', living:'images/bg_living_evening.png', livingDay:'images/bg_living_evening.png',
  bedroom:'images/bg_bedroom.png', kitchen:'images/bg_kitchen.png', bath:'images/bg_bathroom.png',
  rooftop:'images/bg_rooftop.png', store:'images/bg_store.png', bar:'images/bg_bar.png',
  clinic:'images/bg_clinic.png', campus:'images/bg_campus.png', underground:'images/bg_underground.png'
};
const NODES={};
