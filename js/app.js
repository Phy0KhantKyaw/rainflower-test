
  let chgLang = document.getElementById('navDrop').textContent;
  let siteLang = document.getElementById('siteContent');

  let serviceLang0 = document.getElementById('serviceLang0');
  let serviceLang1 = document.getElementById('serviceLang1');
  let serviceLang2 = document.getElementById('serviceLang2');
  let serviceLang3 = document.getElementById('serviceLang3');
  let serviceLang4 = document.getElementById('serviceLang4');
  let serviceLang5 = document.getElementById('serviceLang5');
  let serviceLang6 = document.getElementById('serviceLang6');

  let show = document.getElementById('show');
  let ygnShow = document.getElementById('ygnShow');
  let ygnShow0 = document.getElementById('ygnShow0');
  let ygnShow1 = document.getElementById('ygnShow1');
  let ygnShow2 = document.getElementById('ygnShow2');

  let mdyShow = document.getElementById('mdyShow');
  let mdyShow1 = document.getElementById('mdyShow1');
  
  let nptShow = document.getElementById('nptShow');
  let nptShow1 = document.getElementById('nptShow1');

  

    // function changeLanguage(lang){
    //   location.hash = lang;
    //   location.reload(); 
    // }

    function navChangeMyanmar(){
      document.getElementById('navDrop').textContent = "Myanmar";
      siteLang.textContent = language.mm.Welcome;
      serviceLang0.textContent = language.mm.Service0;
      serviceLang1.textContent = language.mm.Service1;
      serviceLang2.textContent = language.mm.Service2;
      serviceLang3.textContent = language.mm.Service3;
      serviceLang4.textContent = language.mm.Service4;
      serviceLang5.textContent = language.mm.Service5;
      serviceLang6.textContent = language.mm.Service6;
      show.textContent = language.mm.show;
      ygnShow.textContent = language.mm.ygnShow;
      // ygnShow0.textContent = language.mm.ygnShow0;
      ygnShow1.textContent = language.mm.ygnShow1;
      ygnShow2.textContent = language.mm.ygnShow2;
      mdyShow.textContent = language.mm.mdyShow;
      mdyShow1.textContent = language.mm.mdyShow1;
      nptShow.textContent = language.mm.nptShow;
      nptShow1.textContent = language.mm.nptShow1;
    }

    function navChangeEnglish(){
      document.getElementById('navDrop').textContent = "English";
      siteLang.textContent = language.eng.Welcome;
      serviceLang0.textContent = language.eng.Service0;
      serviceLang1.textContent = language.eng.Service1;
      serviceLang2.textContent = language.eng.Service2;
      serviceLang3.textContent = language.eng.Service3;
      serviceLang4.textContent = language.eng.Service4;
      serviceLang5.textContent = language.eng.Service5;
      serviceLang6.textContent = language.eng.Service6;
      show.textContent = language.eng.show;      
      ygnShow.textContent = language.eng.ygnShow;
      // ygnShow0.textContent = language.eng.ygnShow0;
      ygnShow1.textContent = language.eng.ygnShow1;
      ygnShow2.textContent = language.eng.ygnShow2;
      mdyShow.textContent = language.eng.mdyShow;
      mdyShow1.textContent = language.eng.mdyShow1;
      nptShow.textContent = language.eng.nptShow;
      nptShow1.textContent = language.eng.nptShow1;
    }

    let language = {
      eng:{
        Welcome: "Rain Flower Fire Extinguisher Distributions & Services is one of the sub "+
        "business units of Myanmar Thiha Co., Ltd. The company has been selling "+
        "and distributing Rain Flower Fire Extinguishers in Myanmar since 2002.",
        Service0: "Our Services",
        Service1: "We suggest the customers where to "+"keep & How to use of Fire Extinguisher products.",
        Service2: "3 Years (or) 5 Years warranty"+" for our products.",
        Service3: "Door to Door delivery & installation"+" service in Yangon, Mandalay & Naypyitaw Area.",
        Service4: "Refill & new change services.",
        Service5: "Inspection for fire extinguishers.",
        Service6: "Fire extinguisher demonstration",
        show:"Showrooms",
        ygnShow: "Yangon Showrooms",      
        ygnShow1: "Showroom No. 1 (Ahlone)"+"No. (162), Lower Kyee Myin Daing Road, East Saw Yan Paing Ward, Ahlone Township, Yangon."+"Phone: 09-777048090, 09-777048091, 09-73100890, 09-7310089",
        ygnShow2: "Showroom No. 2 (9 Miles)"+"Corner of Ocean Super Center, (9) Miles, Pyay Road, Mayangone Township, Yangon."+"Phone: 09-777048092, 09-777048093",
        mdyShow: "Mandalay Showroom",
        mdyShow1: "Showroom No. 3 (MDY)"+"Corner of 78st x 42st, Near the No.11 Police Station, YGN-MDY Main Road, Chan Myae Thar Si Township, Mandalay."+"Phone: 09-777048106, 09-777048107",
        nptShow: "Nay Pyi Taw Showroom",
        nptShow1: "Showroom No. 4 (NPT)"+"No. (65-A/B), YGN-MDY Highway (old) Road, Pobbathiri Township, Naypyitaw."+"Phone: 09-777048108, 09-777048109",
      },
      mm:{
        Welcome: "Rain Flower မီးသတ်ဆေးဘူးဖြန့်ချီရေး သည်"+
        "မြန်မာသီဟကုမ္ပဏီ၏လုပ်ငန်းခွဲတစ်ခု ဖြစ်သည်။",
        Service0: "ဝန်ဆောင်မှုများ",
        Service1: "ဝယ်ယူသူများကို မီးသတ်ဆေးဘူးများ "+" အသုံးပြုပုံနှင့် ထားသိုပုံများကို အကြံပေးခြင်း",
        Service2: "ပစ္စည်းများကို ၃နှစ် (သို့မဟုတ်) ၅နှစ် "+" အာမခံပေးထားခြင်း",
        Service3: "ရန်ကုန်၊မန္တလေးနှင့်နေပြည်တော်မြို့များတွင် "+" အိမ်တိုင်ရာရောက် ပို့ဆောင်တပ်ဆင်ပေးခြင်း",
        Service4: "ဆေးရည်ဖြည့်ပေးခြင်းနှင့် အသစ်လဲလှယ်ပေးခြင်း",
        Service5: "မီးသတ်ဆေးဘူးများအား စစ်ဆေးပေးခြင်း",
        Service6: "မီးသတ်ဆေးဘူးများအား လက်တွေ့သရုပ်ပြခြင်း",
        show:"အရောင်းပြခန်းများ",
        ygnShow : "ရန်ကုန် အရောင်းပြခန်းများ",
        ygnShow1: "အရောင်းပြခန်း-၁(အလုံ)၊"+"အမှတ်(၁၆၂)အောက်ကြည့်မြင့်တိုင်လမ်း,အရှေ့စောရန်ပိုင်,အလုံမြို့နယ်,ရန်ကုန်။"+"ဖုန်း : ၀၉-၇၇၇၀၄၈၀၉၀, ၀၉-၇၇၇၀၄၈၀၉၁, ၀၉-၇၃၁၀၀၈၉၀, ၀၉-၇၃၁၀၀၈၉",
        ygnShow2: "အရောင်းပြခန်း-၂(၉မိုင်)၊"+"Ocean Super Center ဘေး,၉မိုင်,ပြည်လမ်း,မရမ်းကုန်းမြို့နယ်,ရန်ကုန်။"+"ဖုန်း : ၀၉-၇၇၇၀၄၈၀၉၂,၀၉-၇၇၇၀၄၈၀၉၃",
        mdyShow: "မန္တလေး အရောင်းပြခန်း",
        mdyShow1: "အရောင်းပြခန်း-၃(မန္တလေး)၊"+"၇၈လမ်းx၄၂လမ်းကြား,အမှတ်-၁၁ ရဲစခန်းအနီး,ရန်ကုန်-မန္တလေး မိန်းလမ်းမကြီး,ချမ်းမြသာစည်မြို့နယ်,မန္တလေး။"+"ဖုန်း : ၀၉-၇၇၇၀၄၈၁၀၆,၀၉-၇၇၇၀၄၈၁၀၇",
        nptShow: "နေပြည်တော် အရောင်းပြခန်း",
        nptShow1: "အရောင်းပြခန်း-၄(နေပြည်တော်)၊"+"အမှတ်(၆၅-A/B),ရန်ကုန်-မန္တလေး အမြန်လမ်းဟောင်း,ပုပ္ဗသီရိမြို့နယ်,နေပြည်တော်။"+"ဖုန်း : ၀၉-၇၇၇၀၄၈၁၀၈,၀၉-၇၇၇၀၄၈၁၀၉"
      }
    };

    if(chgLang == "Myanmar"){
      siteLang.textContent = language.mm.Welcome;
         
  

    }else{
      siteLang.textContent = language.eng.Welcome;
      
      
    }
