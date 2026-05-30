/* Genvolt external Tilda bundle. Built 2026-05-30T15:25:31.410Z. */
(function(){
  var VERSION="20260530152531";
  if(window.GV_EXTERNAL_BUNDLE_VERSION===VERSION)return;
  window.GV_EXTERNAL_BUNDLE_VERSION=VERSION;
  function addStyle(id, css) {
    if(!css)return;
    var old=document.getElementById(id);
    if(old&&old.dataset.gvExternalBundle==='1'&&old.textContent===css)return;
    if(old&&old.parentNode)old.parentNode.removeChild(old);
    var style=document.createElement('style');
    style.id=id;
    style.dataset.gvExternalBundle='1';
    style.textContent=css;
    (document.head||document.documentElement).appendChild(style);
  }
  addStyle("gv-compact-filter-style", ".gv-pf{--gv-green:#20242a;--gv-yellow:#ffd826;--gv-ink:#222;--gv-muted:#717b7d;--gv-line:#dfe7e8;--gv-panel:#eef4f4;max-width:1200px;margin:0 auto 34px;background:var(--gv-panel);box-shadow:0 18px 34px rgba(17,35,38,.12);border:1px solid rgba(32,36,42,.08);font-family:Circe,Arial,sans-serif} .gv-pf__head{display:inline-flex;align-items:center;min-height:50px;padding:0 28px;background:var(--gv-green);color:#fff;font-size:17px;font-weight:700} .gv-pf__body{padding:26px 24px 12px} .gv-pf__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px 32px} .gv-pf__advanced{display:none;margin-top:22px} .gv-pf_expanded .gv-pf__advanced{display:grid} .gv-pf__field{min-width:0} .gv-pf__label{display:flex;align-items:center;gap:7px;margin-bottom:7px;color:#3f4a4d;font-size:14px;font-weight:700} .gv-pf__control{width:100%;height:38px;border:1px solid var(--gv-line);background:#fff;color:var(--gv-ink);border-radius:0;padding:0 13px;font-size:16px;outline:none;box-sizing:border-box} .gv-pf__select{appearance:none;background-image:linear-gradient(45deg,transparent 50%,var(--gv-green) 50%),linear-gradient(135deg,var(--gv-green) 50%,transparent 50%);background-position:calc(100% - 18px) 16px,calc(100% - 12px) 16px;background-size:6px 6px,6px 6px;background-repeat:no-repeat;padding-right:34px} .gv-pf__range{display:grid;grid-template-columns:1fr 1fr;gap:12px} .gv-pf__actions{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;padding-top:20px} .gv-pf__more{display:inline-flex;align-items:center;gap:8px;border:0;background:transparent;color:var(--gv-green);padding:9px 0;font-size:16px;font-weight:700;cursor:pointer} .gv-pf__more-mark{display:inline-grid;place-items:center;width:20px;height:20px;background:var(--gv-green);color:#fff;font-size:12px;line-height:1} .gv-pf__buttons{display:flex;justify-content:flex-end;gap:0} .gv-pf__btn{min-width:135px;height:52px;border:0;padding:0 24px;font-size:16px;font-weight:700;cursor:pointer} .gv-pf__btn_reset{background:#f6f8f8;color:#2b3032} .gv-pf__btn_submit{background:var(--gv-yellow);color:#1e1e1e} .gv-pf__btn:hover{filter:brightness(.97)} @keyframes gv-raw-catalog-fallback{to{opacity:1;visibility:visible}} body:not(.gv-pf-ready) #rec2274215281 .t-section__container, body:not(.gv-pf-ready) #rec2274215281 .js-catalog-cont-w-filter, body:not(.gv-pf-ready) #rec2274215281 .js-store-grid-cont, body:not(.gv-pf-ready) #rec2274215281 .t-store__grid-cont, body:not(.gv-pf-ready) #rec2242339551 .js-sidebar-filters, body:not(.gv-pf-ready) #rec2242339551 .js-catalog-cont-w-filter, body:not(.gv-pf-ready) #rec2242339551 .js-store-grid-cont, body:not(.gv-pf-ready) #rec2242339551 .t-store__grid-cont, body:not(.gv-pf-ready) #rec1919079421 .js-sidebar-filters, body:not(.gv-pf-ready) #rec1919079421 .js-catalog-cont-w-filter, body:not(.gv-pf-ready) #rec1919079421 .js-store-grid-cont, body:not(.gv-pf-ready) #rec1919079421 .t-store__grid-cont{opacity:0!important;visibility:hidden!important;animation:gv-raw-catalog-fallback .01s linear 8s forwards} #rec2274215281 .t-catalog__filter__search-and-sort, #rec2242339551 .t-catalog__filter__search-and-sort, #rec1919079421 .t-catalog__filter__search-and-sort, #rec2274215281 .js-sidebar-filters, #rec2242339551 .js-sidebar-filters, #rec1919079421 .js-sidebar-filters, #rec2274215281 .js-catalog-parts-select-container, #rec2242339551 .js-catalog-parts-select-container, #rec1919079421 .js-catalog-parts-select-container{display:none!important} body.gv-pf-ready .t-catalog__filter__search-and-sort,body.gv-pf-ready .js-sidebar-filters,body.gv-pf-ready .js-catalog-parts-select-container{display:none!important} body.gv-pf-ready .js-catalog-cont-w-filter{display:block!important;max-width:1200px!important;margin:0 auto!important} body.gv-pf-ready .t-catalog__card{transition:transform .16s ease,box-shadow .16s ease} body.gv-pf-ready .t-catalog__card:hover{transform:translateY(-2px)} @media screen and (max-width:980px){#rec2274215281{display:block!important}#rec2274251051{display:none!important}.gv-pf{margin:0 16px 26px}.gv-pf__head{display:flex;width:100%;box-sizing:border-box}.gv-pf__body{padding:20px 16px 14px}.gv-pf__grid,.gv-pf_expanded .gv-pf__advanced{grid-template-columns:1fr;gap:16px}.gv-pf__actions{align-items:stretch;flex-direction:column}.gv-pf__buttons{width:100%}.gv-pf__btn{flex:1;min-width:0}body.gv-pf-ready .js-catalog-cont-w-filter{max-width:none!important;margin:0!important}} .gv-mobile-tabs{display:flex;gap:0;border-bottom:1px solid #eee;margin:24px 0 16px} .gv-mobile-tab{flex:1;border:0;background:transparent;padding:12px 0;font:inherit;font-weight:500;color:#1a1a1a} .gv-mobile-tab_active{border-bottom:2px solid #1a1a1a} .gv-mobile-tab-panel{display:none} .gv-mobile-tab-panel_active{display:block} .gv-char-sections{display:block;width:100%;max-width:760px;margin:0 auto 24px;font-size:14px;line-height:1.35;color:#111;border-collapse:collapse} .gv-char-section{margin:0} .gv-char-section-title{box-sizing:border-box;width:100%;margin:0;background:#ffd826;color:#20242a;padding:9px 18px;font-size:14px;line-height:1.3;font-weight:700} .gv-char-table{display:table;width:100%;border-collapse:collapse} .gv-char-row{display:table-row;width:100%;min-height:34px} .gv-char-name,.gv-char-value{box-sizing:border-box;display:table-cell;vertical-align:middle;padding:8px 18px;border-top:1px solid rgba(255,255,255,.72);overflow-wrap:anywhere} .gv-char-name{position:relative;width:45%;background:#fffdf4;color:#20242a} .gv-char-value{width:55%;background:#f7f4e8;color:#20242a} .gv-char-name-inner{display:flex;align-items:center;justify-content:space-between;gap:8px} .gv-char-label{min-width:0} .gv-char-help-wrap{position:relative;display:inline-flex;flex:0 0 auto;align-items:center} .gv-char-help{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border:0;border-radius:50%;background:#ffd826;color:#20242a;font:700 13px/1 Arial,sans-serif;cursor:pointer;padding:0} .gv-char-help:hover,.gv-char-help:focus{background:#20242a;color:#ffd826;outline:none} .gv-char-tip{position:absolute;z-index:99999;left:30px;top:50%;display:none;width:320px;max-width:72vw;box-sizing:border-box;transform:translateY(-50%);background:#20242a;color:#fff;padding:16px 42px 16px 18px;font-size:14px;line-height:1.45;font-weight:400;box-shadow:0 12px 28px rgba(0,0,0,.22)} .gv-char-tip:before{content:\"\";position:absolute;left:-8px;top:50%;margin-top:-8px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #ffd826} .gv-char-help-wrap:hover .gv-char-tip,.gv-char-help:focus+.gv-char-tip{display:block} .gv-char-tip-close{position:absolute;right:10px;top:8px;width:24px;height:24px;border:0;background:transparent;color:#fff;font-size:28px;line-height:22px;cursor:pointer;padding:0} .gv-char-tip-portal{position:fixed;z-index:2147483647;display:none;width:320px;max-width:72vw;box-sizing:border-box;background:#20242a;color:#fff;padding:16px 42px 16px 18px;font-size:14px;line-height:1.45;font-weight:400;box-shadow:0 12px 28px rgba(0,0,0,.22)} .gv-char-tip-portal_open{display:block} .gv-char-tip-portal:before{content:\"\";position:absolute;left:var(--gv-tip-arrow-x,50%);transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent} .gv-char-tip-portal_below:before{top:-8px;border-bottom:8px solid #ffd826} .gv-char-tip-portal_above:before{bottom:-8px;border-top:8px solid #ffd826} .gv-char-tip-portal-close{position:absolute;right:10px;top:8px;width:24px;height:24px;border:0;background:transparent;color:#fff;font-size:28px;line-height:22px;cursor:pointer;padding:0} .gv-char-section+.gv-char-section{margin-top:0} @media screen and (max-width:980px){.gv-char-sections{max-width:none;font-size:14px;line-height:1.32}.gv-char-section-title{padding:8px 14px}.gv-char-name,.gv-char-value{width:50%;padding:7px 14px}.gv-char-name-inner{gap:6px}.gv-char-help{width:20px;height:20px;font-size:12px}.gv-char-tip{display:none!important}.gv-char-tip:before{display:none}.gv-char-tip-portal{max-width:calc(100vw - 24px);max-height:44vh;overflow:auto}}");
  addStyle("gv-chars-widget-poc-style", ".gvw-char-widget{display:block;width:100%;font-family:inherit;font-size:14px;line-height:1.35;color:#111}\n.gvw-char-source-hidden{display:none!important}\n.gvw-char-widget~.gv-char-sections,.gvw-char-widget~.js-catalog-prod-all-charcs,.gvw-char-widget~ul{display:none!important}\n.gvw-char-section-title{box-sizing:border-box;width:100%;margin:0;background:#ffd826;color:#20242a;padding:8px 18px;font-weight:700}\n.gvw-char-row{display:flex;width:100%;min-height:34px;align-items:stretch}\n.gvw-char-name,.gvw-char-value{box-sizing:border-box;padding:7px 18px;border-top:1px solid rgba(255,255,255,.72);overflow-wrap:anywhere}\n.gvw-char-name{display:flex;align-items:center;justify-content:space-between;gap:8px;width:45%;background:#fffdf4;color:#20242a}\n.gvw-char-value{display:flex;align-items:center;width:55%;background:#f7f4e8;color:#20242a}\n.gvw-char-label{min-width:0}\n.gvw-char-help{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;width:22px;height:22px;border:0;border-radius:50%;background:#ffd826;color:#20242a;font:700 13px/1 Arial,sans-serif;cursor:pointer;padding:0}\n.gvw-char-help:hover,.gvw-char-help:focus{background:#20242a;color:#ffd826;outline:none}\n.gvw-char-tip{position:fixed;z-index:2147483647;display:none;width:320px;max-width:calc(100vw - 24px);box-sizing:border-box;background:#20242a;color:#fff;padding:16px 42px 16px 18px;font-size:14px;line-height:1.45;font-weight:400;box-shadow:0 12px 28px rgba(0,0,0,.22)}\n.gvw-char-tip_open{display:block}\n.gvw-char-tip:before{content:\"\";position:absolute;left:var(--gvw-tip-arrow-x,50%);transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent}\n.gvw-char-tip_below:before{top:-8px;border-bottom:8px solid #ffd826}\n.gvw-char-tip_above:before{bottom:-8px;border-top:8px solid #ffd826}\n.gvw-char-tip-close{position:absolute;right:10px;top:8px;width:24px;height:24px;border:0;background:transparent;color:#fff;font-size:28px;line-height:22px;cursor:pointer;padding:0}\n@media screen and (max-width:980px){.gvw-char-widget{font-size:14px;line-height:1.32}.gvw-char-section-title{padding:8px 14px}.gvw-char-row{min-height:32px}.gvw-char-name,.gvw-char-value{width:50%;padding:7px 14px}.gvw-char-name{gap:6px}.gvw-char-help{width:20px;height:20px;font-size:12px}.gvw-char-tip{max-height:44vh;overflow:auto}}");
  addStyle("gv-product-island-style", ".gv-product-island {\n  display: block;\n  width: 100%;\n}\n\n.gv-product-island .gv-mobile-tabs {\n  margin-top: 24px;\n}\n\n.gv-product-island-ready .js-catalog-product .js-catalog-prod-all-text {\n  display: none !important;\n}\n\n.gv-product-island__desc p {\n  margin: 0 0 12px;\n}\n\n.gv-product-island-help {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border: 0;\n  border-radius: 50%;\n  background: #ffd826;\n  color: #20242a;\n  font: 700 13px/1 Arial, sans-serif;\n  cursor: pointer;\n  padding: 0;\n}\n\n.gv-product-island-help:hover,\n.gv-product-island-help:focus {\n  background: #20242a;\n  color: #ffd826;\n  outline: none;\n}\n\n@media screen and (max-width: 980px) {\n  .gv-product-island-help {\n    width: 20px;\n    height: 20px;\n    font-size: 12px;\n  }\n}");
  addStyle("gv-filter-island-style", ".gv-pf_preact .gv-pf__advanced {\n  display: grid;\n  max-height: 0;\n  margin-top: 0;\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  transform: translateY(-8px);\n  transition:\n    max-height 360ms cubic-bezier(.22, 1, .36, 1),\n    margin-top 260ms ease,\n    opacity 220ms ease,\n    transform 300ms cubic-bezier(.22, 1, .36, 1);\n}\n\n.gv-pf_preact.gv-pf_expanded .gv-pf__advanced,\n.gv-pf_preact[data-gv-advanced-open=\"1\"] .gv-pf__advanced {\n  max-height: 760px;\n  margin-top: 22px;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateY(0);\n}\n\n@media screen and (max-width: 980px) {\n  .gv-pf_preact.gv-pf_expanded .gv-pf__advanced,\n  .gv-pf_preact[data-gv-advanced-open=\"1\"] .gv-pf__advanced {\n    max-height: 1400px;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .gv-pf_preact .gv-pf__advanced {\n    transition: none;\n  }\n}");

  // gv-profpower-filter-script
  (function(){
    (function(){
      if(!new URLSearchParams(location.search).has('gv_legacy_filters'))return;
      if(window.gvCompactFilterInstalled)return;window.gvCompactFilterInstalled=1;
      var recid='2274215281',brandMap={'/a-ipower':'A-iPower','/agg':'AGG','/ctg':'CTG','/denyo':'Denyo','/elemax':'Elemax','/energo':'Energo','/generac':'Generac','/gmgen':'GMGen','/gmp':'GMP','/hertz':'Hertz','/kub':'KUB','/kubota':'Kubota','/mitsui':'Mitsui Power','/motor':'Motor','/mvae':'MVAE','/poweron':'Poweron','/pramac':'Pramac','/sunreka':'SUNREKA','/toyo':'Toyo','/tss':'ТСС'};
      var primary=[['Тип топлива','Тип топлива'],['Мощность, кВт','Мощность номинальная','range'],['Напряжение','Напряжение'],['Исполнение','Исполнение'],['Охлаждение','Охлаждение'],['Объем топливного бака','Объём топливного бака','range'],['Бренд','Бренд'],['Цена, руб.','Цена','price']];
      var advanced=[['Тип запуска','Тип запуска'],['Модель электростанции','Модель электростанции'],['Модель двигателя','Модель двигателя'],['Обороты двигателя','Обороты двигателя','range'],['Расход топлива при 50% мощности','Расход топлива при 50% мощности','range'],['Расход топлива при 75% мощности','Расход топлива при 75% мощности','range'],['Расход топлива при 100% мощности','Расход топлива при 100% мощности','range'],['Количество фаз','Количество фаз'],['Номинальный ток','Номинальный ток','range'],['Уровень шума','Уровень шума','range'],['Страна бренда','Страна бренда'],['Гарантия','Гарантия'],['Длина','Длина','range'],['Ширина','Ширина','range'],['Высота','Высота','range'],['Вес','Вес','range']];
      function c(v){return String(v||'').replace(/\u00a0/g,' ').replace(/\s+/g,' ').trim()}
      function esc(v){return String(v||'').replace(/[&<>"']/g,function(x){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]})}
      function cmp(v){return c(v).toLowerCase().replace(/ё/g,'е')}
      function vis(e){if(!e)return false;var r=e.getBoundingClientRect();return r.width||r.height}
      function catalog(){var a=[].slice.call(document.querySelectorAll('.js-catalog-cont-w-filter'));return a.find(vis)||a[0]||null}
      function root(){var cat=catalog(),rec=cat&&cat.closest('.t-rec[id^="rec"]');return rec&&rec.querySelector('.t-catalog__filter__options')||document.querySelector('.t-catalog__filter__options')}
      function items(){var r=root();return r?[].slice.call(r.querySelectorAll(':scope > .js-catalog-filter-item')):[]}
      function item(title){title=cmp(title);return items().find(function(x){return cmp((x.querySelector('.js-catalog-filter-item-title')||{}).textContent)===title})}
      function checks(it){return it?[].slice.call(it.querySelectorAll('input.js-catalog-filter-opt-chb')):[]}
      function opts(it){return checks(it).map(function(input){var l=input.closest('label'),t=l&&l.querySelector('.t-catalog__filter__title');return {input:input,value:input.getAttribute('data-filter-value')||input.value||input.name,text:c(t&&t.textContent||input.getAttribute('data-filter-value')||input.value)}}).filter(function(o){return o.text})}
      function num(v){var m=c(v).replace(',','.').match(/-?\d+(?:\.\d+)?/);return m?Number(m[0]):null}
      function param(it,id){var h=it&&it.querySelector('input.js-catalog-filter-opt[type="hidden"]');return h&&h.name?'tfc_'+h.name+'['+id+']':''}
      function field(f){var it=item(f[1]);if(!it)return null;var w=document.createElement('label');w.className='gv-pf__field';w.innerHTML='<span class="gv-pf__label">'+esc(f[0])+'</span>';if(f[2]==='range'||f[2]==='price'){w.innerHTML+='<span class="gv-pf__range"><input class="gv-pf__control" inputmode="decimal" data-title="'+esc(f[1])+'" data-role="min" data-type="'+(f[2]||'')+'" placeholder="от"><input class="gv-pf__control" inputmode="decimal" data-title="'+esc(f[1])+'" data-role="max" data-type="'+(f[2]||'')+'" placeholder="до"></span>';return w}var s=document.createElement('select');s.className='gv-pf__control gv-pf__select';s.dataset.title=f[1];s.innerHTML='<option value="">Не важно</option>'+opts(it).map(function(o){return '<option value="'+esc(o.value)+'">'+esc(o.text)+'</option>'}).join('');w.appendChild(s);return w}
      function setOne(title,value){var o=opts(item(title));o.forEach(function(x){var on=!!value&&x.value===value;if(x.input.checked!==on)x.input.click()})}
      function setRange(title,min,max){var has=min!==''||max!=='';min=min===''?-Infinity:Number(min);max=max===''?Infinity:Number(max);opts(item(title)).forEach(function(o){var n=num(o.text),on=has&&n!==null&&n>=min&&n<=max;if(o.input.checked!==on)o.input.click()})}
      function setPrice(min,max){var it=item('Цена');if(!it)return;[['min',min],['max',max]].forEach(function(p){if(p[1]==='')return;var x=it.querySelector(p[0]==='min'?'.js-catalog-filter-pricemin':'.js-catalog-filter-pricemax');if(x){x.value=p[1];x.dispatchEvent(new Event('input',{bubbles:true}));x.dispatchEvent(new Event('change',{bubbles:true}))}})}
      function brand(){return brandMap[location.pathname.replace(/\/+$/,'')]||''}
      function search(panel,id){var qs=new URLSearchParams();[].slice.call(panel.querySelectorAll('select[data-title]')).forEach(function(s){if(!s.value)return;var p=param(item(s.dataset.title),id);if(p)qs.append(p,s.value)});var ranges={};[].slice.call(panel.querySelectorAll('input[data-title]')).forEach(function(x){if(!ranges[x.dataset.title])ranges[x.dataset.title]={};ranges[x.dataset.title][x.dataset.role]=c(x.value)});Object.keys(ranges).forEach(function(t){var r=ranges[t],it=item(t),p=param(it,id),has=(r.min||r.max);if(!p||!has)return;if(t==='Цена'){if(r.min)qs.set('tfc_price:min['+id+']',r.min);if(r.max)qs.set('tfc_price:max['+id+']',r.max);return}var min=r.min===''?-Infinity:Number(r.min),max=r.max===''?Infinity:Number(r.max);opts(it).forEach(function(o){var n=num(o.text);if(n!==null&&n>=min&&n<=max)qs.append(p,o.value)})});if(qs.toString())qs.set('tfc_div',':::');return qs.toString()?'?'+qs.toString():''}
      function apply(panel){var b=brand();if(b){var bs=panel.querySelector('select[data-title="Бренд"]');if(bs){var o=[].slice.call(bs.options).find(function(x){return cmp(x.textContent)===cmp(b)});if(o){bs.value=o.value;setOne('Бренд',o.value)}}}[].slice.call(panel.querySelectorAll('select[data-title]')).forEach(function(s){setOne(s.dataset.title,s.value)});var ranges={};[].slice.call(panel.querySelectorAll('input[data-title]')).forEach(function(x){if(!ranges[x.dataset.title])ranges[x.dataset.title]={};ranges[x.dataset.title][x.dataset.role]=c(x.value)});Object.keys(ranges).forEach(function(t){if(t==='Цена')setPrice(ranges[t].min||'',ranges[t].max||'');else setRange(t,ranges[t].min||'',ranges[t].max||'')})}
      function build(){if(location.pathname.indexOf('/tproduct/')!==-1)return;var r=root(),cat=catalog();if(!r||!cat||document.querySelector('.gv-pf'))return;var p=document.createElement('div');p.className='gv-pf';p.innerHTML='<div class="gv-pf__head">Подобрать генератор</div><div class="gv-pf__body"><div class="gv-pf__grid"></div><div class="gv-pf__grid gv-pf__advanced"></div><div class="gv-pf__actions"><button class="gv-pf__more" type="button">Расширенный поиск <span class="gv-pf__more-mark">⌄</span></button><div class="gv-pf__buttons"><button class="gv-pf__btn gv-pf__btn_reset" type="button">Сбросить</button><button class="gv-pf__btn gv-pf__btn_submit" type="button">Подобрать</button></div></div></div>';primary.map(field).filter(Boolean).forEach(function(x){p.querySelector('.gv-pf__grid').appendChild(x)});advanced.map(field).filter(Boolean).forEach(function(x){p.querySelector('.gv-pf__advanced').appendChild(x)});cat.parentNode.insertBefore(p,cat);document.body.classList.add('gv-pf-ready');p.querySelector('.gv-pf__more').onclick=function(){p.classList.toggle('gv-pf_expanded')};p.querySelector('.gv-pf__btn_submit').onclick=function(){var home=location.pathname.replace(/^\/+|\/+$/g,'')==='';if(home||(!/\/catalog\/generators\/?$/.test(location.pathname)&&search(p,recid)))location.href='/catalog/generators'+search(p,recid);else apply(p)};p.querySelector('.gv-pf__btn_reset').onclick=function(){location.href=location.pathname};var nat=document.querySelector('.t-catalog__filter');if(nat)nat.style.display='none'}
      var n=0,t=setInterval(function(){build();if(++n>30||document.querySelector('.gv-pf'))clearInterval(t)},500);document.addEventListener('DOMContentLoaded',build);addEventListener('resize',build);addEventListener('load',build)
    })();
  })();

  // gv-mobile-product-tabs-repair
  (function(){
    (function(){
      if(!/[?&](?:gv_preact_product=0|gv_no_product_island=1)(?:&|$)/.test(location.search))return;
      function c(v){return String(v||'').replace(/\\u00a0/g,' ').replace(/\\s+/g,' ').trim()}
      function esc(v){return String(v||'').replace(/[&<>"']/g,function(x){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]})}
      function vis(e){if(!e)return false;for(var n=e;n&&n!==document.body;n=n.parentElement){var s=getComputedStyle(n);if(s.display==='none'||s.visibility==='hidden')return false}var r=e.getBoundingClientRect();return r.width>0&&r.height>0}
      function first(root,sel){var a=[].slice.call((root||document).querySelectorAll(sel));return a.find(vis)||a[0]||null}
      function root(){var a=[].slice.call(document.querySelectorAll('.js-catalog-product')).filter(vis);return a.find(function(x){return /product-popup/.test(x.className)})||a[0]}
      function pushRow(out,seen,title,value){title=c(title);value=c(value);if(!title||!value)return;var k=title.toLowerCase();if(seen[k])return;seen[k]=1;out.push({title:title,value:value})}
      function parseInto(text,out,seen){c(text).split(/(?=[А-ЯЁA-Z][^:]{1,70}: *)/).forEach(function(t){var m=c(t).match(/^([^:]+): *(.+)$/);if(m)pushRow(out,seen,m[1],m[2])})}
      function parseRows(text){var seen={},out=[];parseInto(text,out,seen);return out}
      function rows(r){
        var root=r||document,seen={},out=[];
        [].slice.call(root.querySelectorAll('.js-catalog-prod-charcs,.t-typography__characteristics')).forEach(function(n){parseInto(n.textContent,out,seen)});
        if(out.length)return out;
        [].slice.call(root.querySelectorAll('.js-catalog-prod-all-charcs li,.js-catalog-prod-all-charcs,.gv-mobile-tab-panel li,.t-catalog__tabs__content li')).forEach(function(n){parseInto(n.textContent,out,seen)});
        return out
      }
      function val(list,names){names=names.map(function(x){return c(x).toLowerCase()});var it=list.find(function(x){return names.indexOf(c(x.title).toLowerCase())!==-1});return c(it&&it.value)}
      function weak(t,title){t=c(t);title=c(title);return !t||t.length<80||!!(title&&t.toLowerCase()===title.toLowerCase())||!!(title&&t.length<=title.length+30&&t.toLowerCase().indexOf(title.toLowerCase())!==-1)}
      var fallbacks={
        '112890':'Газо-бензиновый генератор Mitsui Power Eco ZM 9500 GE - это однофазный генератор с максимальной мощностью 8.5 кВт/8.5 кВА и напряжением 230 В. У электростанции установлен двигатель Mitsui число оборотов которого достигает 3000 об/мин. Страной бренда Mitsui Power является Япония. Купить газо-бензиновый генератор Mitsui Power Eco ZM 9500 GE можно, оформив заказ на нашем сайте, либо позвонив по телефону +7 (495) 492-52-62. В нашем магазине представлены бензиновые генераторы известных мировых производителей.',
        '779570466952':'Газо-бензиновый генератор Mitsui Power Eco ZM 9500 GE - это однофазный генератор с максимальной мощностью 8.5 кВт/8.5 кВА и напряжением 230 В. У электростанции установлен двигатель Mitsui число оборотов которого достигает 3000 об/мин. Страной бренда Mitsui Power является Япония. Купить газо-бензиновый генератор Mitsui Power Eco ZM 9500 GE можно, оформив заказ на нашем сайте, либо позвонив по телефону +7 (495) 492-52-62. В нашем магазине представлены бензиновые генераторы известных мировых производителей.'
      };
      function generated(title,list){
        title=c(title);if(!title)return '';
        var fuel=val(list,['Тип топлива']),voltage=val(list,['Напряжение']),nom=val(list,['Мощность номинальная']),max=val(list,['Мощность максимальная']),exec=val(list,['Исполнение']),start=val(list,['Тип запуска']),brand=val(list,['Бренд двигателя']),model=val(list,['Модель двигателя']),cool=val(list,['Охлаждение']),tank=val(list,['Объём топливного бака','Объем топливного бака']),cons=val(list,['Расход топлива при 75% мощности']),run=val(list,['Время работы при 75% мощности']),ph=val(list,['Количество фаз']),maker=val(list,['Производитель']),war=val(list,['Гарантия']);
        var d=[];if(fuel)d.push('тип топлива: '+fuel);if(ph)d.push(ph);if(nom)d.push('номинальная мощность '+nom);if(max)d.push('максимальная мощность '+max);if(voltage)d.push('напряжение '+voltage);
        var s=title+' - генератор'+(d.length?' ('+d.join(', ')+')':'')+'.',p=[];if(exec)p.push('исполнение: '+exec);if(start)p.push('запуск: '+start);if(brand||model)p.push('двигатель '+[brand,model].filter(Boolean).join(' '));if(cool)p.push('охлаждение: '+cool);if(tank)p.push('топливный бак '+tank);if(p.length)s+=' Основные параметры: '+p.join(', ')+'.';if(cons||run)s+=' При нагрузке 75% '+[cons?'расход топлива составляет '+cons:'',run?'время работы - '+run:''].filter(Boolean).join(', ')+'.';if(maker||war)s+=' '+[maker?'Производитель: '+maker:'',war?'гарантия: '+war:''].filter(Boolean).join('; ')+'.';return s
      }
      function sourceDesc(box){
        var clone=box.cloneNode(true);[].slice.call(clone.querySelectorAll('.gv-mobile-tabs,.gv-mobile-tab-panel')).forEach(function(n){n.remove()});var t=c(clone.textContent).replace(/^О товаре\\s*Характеристики\\s*/,'');return c(t.split(/Характеристики|Основные характеристики|Двигатель|Топливная система|Электрогенератор|Дополнительные характеристики|Габариты и масса|Производитель/)[0])
      }
      function rawRows(box){if(!box)return[];var clone=box.cloneNode(true);[].slice.call(clone.querySelectorAll('.gv-mobile-tabs,.gv-mobile-tab-panel')).forEach(function(n){n.remove()});var t=c(clone.textContent);var tail=t.split(/Характеристики|Основные характеристики/).slice(1).join(' ');return parseRows(tail||t)}
      function rowsSig(list){return c((list||[]).map(function(x){return c(x.title)+': '+c(x.value)}).join('|'))}
      function panelSig(panel){if(!panel)return'';var rows=[].slice.call(panel.querySelectorAll('.gv-char-row')).map(function(row){var label=row.querySelector('.gv-char-label')||row.querySelector('.gv-char-name'),n=c(label&&label.textContent).replace(/:\s*$/,''),v=c(row.querySelector('.gv-char-value')&&row.querySelector('.gv-char-value').textContent);return n&&v?n+': '+v:c(row.textContent)});if(rows.length)return c(rows.join('|'));return c([].slice.call(panel.querySelectorAll('li')).map(function(li){return c(li.textContent).replace(/:\s*/g,': ')}).join('|'))}
      function setHtmlIfChanged(node,html){if(node&&node.innerHTML!==html)node.innerHTML=html}
      var sections=[['Основные характеристики',['Напряжение','Модель электростанции','Мощность номинальная','Мощность максимальная','Исполнение','Тип запуска','Автоматизация']],['Двигатель',['Бренд двигателя','Модель двигателя','Мощность двигателя','Объем двигателя','Объём двигателя','Охлаждение','Обороты двигателя','Количество цилиндров','Объем масла','Объём масла','Тип двигателя','Регулировка оборотов']],['Топливная система',['Тип топлива','Объём топливного бака','Объем топливного бака','Расход топлива при 50% мощности','Расход топлива при 75% мощности','Расход топлива при 100% мощности','Время работы при 50% мощности','Время работы при 75% мощности','Время работы при 100% мощности']],['Электрогенератор',['Количество фаз','Производитель альтернатора','Тип электрогенератора','Вид электрогенератора','Номинальный ток','Частота тока','Cos φ','Cos ф','Коэффициент мощности','Степень защиты от пыли и влаги']],['Дополнительные характеристики',['Уровень шума','Инверторная модель','Функция сварки','Шасси/колеса','PG']],['Габариты и масса',['Длина','Ширина','Высота','Вес','Габариты']],['Производитель',['Производитель','Страна бренда','Страна производства','Серия','Гарантия']]];
      var sectionMap;
      function key(v){return c(v).toLowerCase().replace(/ё/g,'е').replace(/[^0-9a-zа-яφ]+/g,' ').trim()}
      var tips={};
      function addTip(names,text){names.forEach(function(n){tips[key(n)]=text})}
      addTip(['Мощность номинальная'],'Мощность генератора. Оптимальная работа генератора происходит при суммарной нагрузке потребителей 75%-80%');
      addTip(['Мощность максимальная'],'Напоминаем, что на максимальной мощности допускается работа генератора не более 10% от общего времени.');
      addTip(['Коэффициент мощности','Cos φ','Cos ф'],'Отношение активной мощности к полной. Если объект потребляет 900 кВт и 1000 кВА, коэффициент мощности составляет 0,9 cos φ или 90%, чем значение ближе к 1, тем лучше.');
      addTip(['Напряжение'],'Напряжение генератора на выходе.');
      addTip(['Исполнение'],'Кожух и контейнер позволяют устанавливать генератор на улице.');
      addTip(['Пуск','Тип запуска'],'Ручной запуск имеют, как правило, генераторы небольшой мощности. У промышленных генераторов - электростартер.');
      addTip(['Степень автоматизации','Автоматизация'],'2-я степень автоматизации (за счет наличия блока АВР) позволяет автоматически включаться генератору при пропадании сети и отключаться при появлении.');
      addTip(['Ток','Номинальный ток'],'Величина измеряется в Амперах. Для определения требуемой мощности необходимо знать какой ток соответствует прибору.');
      addTip(['Количество цилиндров'],'Чем больше цилиндров, тем более высокое соотношение мощности к весу агрегата.');
      addTip(['Номинальная мощность двигателя','Мощность двигателя'],'Обычно, величина именно этого показателя заявляется производителем как расчетная характеристика на протяжении всего периода эксплуатации.');
      addTip(['Рабочий объем двигателя','Рабочий объём двигателя','Объем двигателя','Объём двигателя'],'Двигатель у которого рабочий объем больше, прослужит гораздо дольше, но и потребление топлива у него будет несколько выше.');
      addTip(['Система охлаждения','Охлаждение'],'Тип охлаждения двигателя: воздушный или жидкостный.');
      addTip(['Объем системы смазки','Объём системы смазки','Объем масла','Объём масла'],'Фактическое количество моторного масла');
      addTip(['Частота вращения двигателя','Обороты двигателя'],'3000 или 1500 об/мин. 1500 об/мин имеют больший моторесурс и низкий уровень шума и вибрации.');
      addTip(['Число фаз','Количество фаз'],'1 или 3. При небольших нагрузках и отсутствии 3-фазных потребителей рекомендуем 1 фазу.');
      addTip(['Частота','Частота тока'],'Частота напряжения. В наших сетях принята 50 Гц');
      addTip(['Тип генератора','Тип электрогенератора','Вид электрогенератора'],'Синхронный генератор конструктивно сложнее. Асинхронный генератор устроен гораздо проще.');
      addTip(['Время автономной работы при 75% мощности','Время работы при 75% мощности'],'Время автономной работы от встроенного топливного бака, при нагрузке 75% от номинальной мощности');
      addTip(['Степень защиты','Степень защиты от пыли и влаги'],'Наибольшую популярность приобрели степени защиты IP23 и IP54. Степень защиты IP23 способна защитить от крупных частиц более 12,5 мм и брызг с углом падения до 60°, подходит для эксплуатации в мало запыленных помещениях. IP54 обеспечивает почти полную защиту от загрязнений и пыли, а также от брызг с любого направления.');
      addTip(['Уровень шума'],'Шепот - 10 дБ. Перелистывание газет - 20 дБ. Разговор средней громкости - 50 дБ. Поезд в метро - 80 дБ. Концерт рок-музыки - 100 дБ. Болевой порог - 120 дБ.');
      addTip(['Расход топлива метан','Расход топлива (метан)'],'К данному типу относится в первую очередь магистральный газ');
      addTip(['Расход топлива пропан бутан','Расход топлива (пропан-бутан)'],'Используется как правило в газовых баллонах, газгольдерах');
      addTip(['Класс изоляции'],'Класс изоляции определяет надежность изоляционных материалов, используемых внутри генератора, чтобы предотвратить проникновение электрического тока в нежелательные места и обеспечить безопасность работы системы.');
      function tip(title){return tips[key(title)]||''}
      function listFor(r){var list=rows(r);if(!list.length)list=rawRows(r&&r.querySelector(".js-catalog-prod-all-text"));return list}
      function needsTips(scope,list){return (list||[]).some(function(x){return !!tip(x.title)})&&!(scope&&scope.querySelector(".gv-char-help"))}
      function sec(title){if(!sectionMap){sectionMap={};sections.forEach(function(s){s[1].forEach(function(x){sectionMap[key(x)]=s[0]})})}var k=key(title);if(sectionMap[k])return sectionMap[k];if(/альтернатор|электрогенератор|\\bфаз|\\bток\\b|частота|cos|защит/.test(k))return'Электрогенератор';if(/двигател|цилиндр|охлаждение|обороты|масл/.test(k))return'Двигатель';if(/топлив|бака|расход|время работы/.test(k))return'Топливная система';if(/длина|ширина|высота|вес|габарит/.test(k))return'Габариты и масса';if(/производитель|страна|гарантия|серия/.test(k))return'Производитель';return'Дополнительные характеристики'}
      function charNameHtml(title){var t=tip(title),label='<span class="gv-char-label">'+esc(title)+':</span>';if(!t)return '<span class="gv-char-name-inner">'+label+'</span>';return '<span class="gv-char-name-inner">'+label+'<span class="gv-char-help-wrap"><button class="gv-char-help" type="button" aria-label="Подсказка: '+esc(title)+'" aria-expanded="false">?</button><span class="gv-char-tip" role="tooltip"><button class="gv-char-tip-close" type="button" aria-label="Закрыть подсказку">×</button><span>'+esc(t)+'</span></span></span></span>'}
      function charsHtml(list){var by={},html='';sections.forEach(function(s){by[s[0]]=[]});(list||[]).forEach(function(x){(by[sec(x.title)]||by['Дополнительные характеристики']).push(x)});sections.forEach(function(s){var rows=by[s[0]]||[];if(!rows.length)return;html+='<section class="gv-char-section"><div class="gv-char-section-title">'+esc(s[0])+'</div><div class="gv-char-table">'+rows.map(function(x){return '<div class="gv-char-row"><div class="gv-char-name">'+charNameHtml(x.title)+'</div><div class="gv-char-value">'+esc(x.value)+'</div></div>'}).join('')+'</div></section>'});return html?'<div class="gv-char-sections">'+html+'</div>':''}
      function nativeFix(r){var tabs=r&&r.querySelector(".t-catalog__tabs");if(!tabs)return false;var charcs=r.querySelector(".js-catalog-prod-all-charcs");var textBox=r.querySelector(".js-catalog-prod-all-text");var sku=c(first(r,".js-catalog-prod-sku,.js-product-sku,.t-catalog__prod-popup__sku")&&first(r,".js-catalog-prod-sku,.js-product-sku,.t-catalog__prod-popup__sku").textContent).replace(/^SKU:\s*/i,"");var title=c(first(r,".js-catalog-prod-name,.js-product-name,.t-catalog__prod-popup__name")&&first(r,".js-catalog-prod-name,.js-product-name,.t-catalog__prod-popup__name").textContent);var part=location.pathname.split("/tproduct/")[1]||"";var uid=(part.split("/")[0]||"").split("-")[0]||r.dataset.productGenUid||r.dataset.productUid||"";var list=rows(r);if(!list.length)list=rawRows(textBox);var desc=textBox&&sourceDesc(textBox);if(weak(desc,title))desc=generated(title,list)||fallbacks[sku]||fallbacks[uid]||desc;var charHtml=charsHtml(list),descHtml=desc?"<p>"+esc(desc)+"</p>":"",sig=[sku,uid,title,rowsSig(list),c(desc)].join("|");if(tabs.dataset.gvNativeTabsRepairSig===sig&&tabs.querySelector(".gv-char-row")&&!needsTips(tabs,list)){if(charcs)charcs.style.display="none";bindTips(r);return true}[].slice.call(tabs.querySelectorAll(".t-catalog__tabs__item")).forEach(function(it){var btn=it.querySelector(".js-catalog-tab-button"),nameNode=it.querySelector(".t-catalog__tabs__item-title,.t-catalog__tabs__button-title"),titleText=c(btn&&btn.getAttribute("data-tab-title")||nameNode&&nameNode.textContent||it.textContent);var content=it.querySelector(".t-catalog__tabs__content");if(!content)return;if(titleText.indexOf("О товаре")!==-1||titleText.indexOf("Описание")!==-1){var p=content.querySelector(".gv-mobile-tab-panel");if(p)setHtmlIfChanged(content,p.innerHTML);[].slice.call(content.querySelectorAll(".gv-mobile-tabs,.gv-mobile-tab-panel,.js-catalog-prod-all-charcs")).forEach(function(n){n.remove()});if(descHtml&&!content.querySelector(".gv-mobile-tabs,.gv-mobile-tab-panel")&&c(content.textContent)!==c(desc))setHtmlIfChanged(content,descHtml)}else if(titleText.indexOf("Характеристики")!==-1){var ps=content.querySelectorAll(".gv-mobile-tab-panel");if(!c(content.textContent)&&ps[1])setHtmlIfChanged(content,ps[1].innerHTML);[].slice.call(content.querySelectorAll(".gv-mobile-tabs,.gv-mobile-tab-panel")).forEach(function(n){n.remove()});if(charHtml&&(!content.querySelector(".gv-char-row")||panelSig(content)!==rowsSig(list)||needsTips(content,list)))setHtmlIfChanged(content,charHtml)}});if(charcs)charcs.style.display="none";tabs.dataset.gvNativeTabsRepairReady="1";tabs.dataset.gvNativeTabsRepairSig=sig;bindTips(r);return true}
      function bindTabs(box){var nav=box&&box.querySelector('.gv-mobile-tabs'),pan=box&&box.querySelectorAll('.gv-mobile-tab-panel');if(!nav||!pan||pan.length<2)return;function act(b,e){if(!b)return;if(e){e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation()}var d=b.dataset.gvTab==='d';[].slice.call(nav.querySelectorAll('.gv-mobile-tab')).forEach(function(x){var a=x===b;x.classList.toggle('gv-mobile-tab_active',a);x.setAttribute('aria-selected',a?'true':'false')});pan[0].classList.toggle('gv-mobile-tab-panel_active',d);pan[1].classList.toggle('gv-mobile-tab-panel_active',!d);pan[0].style.display=d?'block':'none';pan[1].style.display=d?'none':'block'}function handler(e){var b=e.target&&e.target.closest&&e.target.closest('.gv-mobile-tab');if(b&&nav.contains(b))act(b,e)}nav.onclick=handler;[].slice.call(nav.querySelectorAll('.gv-mobile-tab')).forEach(function(b){b.onclick=function(e){act(b,e)}});if(nav.dataset.gvTabsBound!=='1'){nav.dataset.gvTabsBound='1';['click','pointerup','touchend'].forEach(function(x){nav.addEventListener(x,handler,true)})}}
      function closeTips(scope){[].slice.call((scope||document).querySelectorAll('.gv-char-help-wrap.gv-char-tip-open')).forEach(function(w){w.classList.remove('gv-char-tip-open');var b=w.querySelector('.gv-char-help');if(b)b.setAttribute('aria-expanded','false')});var p=document.querySelector('.gv-char-tip-portal');if(p){p.classList.remove('gv-char-tip-portal_open');p.innerHTML=''}}
      function bindTips(box){box=box||document;function stop(e){if(e){e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation()}}function clamp(v,min,max){return Math.max(min,Math.min(max,v))}function tipText(b){var n=b&&b.parentNode&&b.parentNode.querySelector('.gv-char-tip>span');return c(n&&n.textContent)}function portal(){var p=document.querySelector('.gv-char-tip-portal');if(!p){p=document.createElement('div');p.className='gv-char-tip-portal';p.setAttribute('role','tooltip');document.body.appendChild(p)}return p}function showPortal(b,text){var p=portal(),r=b.getBoundingClientRect(),gap=10,m=12,w=innerWidth>980?320:Math.min(500,innerWidth-m*2);p.className='gv-char-tip-portal gv-char-tip-portal_open';p.innerHTML='<button class="gv-char-tip-portal-close" type="button" aria-label="Закрыть подсказку">×</button><span>'+esc(text)+'</span>';p.style.width=w+'px';p.style.maxWidth='calc(100vw - 24px)';p.style.left='0px';p.style.top='0px';p.style.right='auto';p.style.bottom='auto';var h=p.offsetHeight,x=innerWidth>980?clamp(r.right+12,m,innerWidth-w-m):clamp(r.left+r.width/2-w/2,m,innerWidth-w-m),below=r.bottom+gap,above=r.top-gap-h,placeBelow=below+h<=innerHeight-m||above<m,y=placeBelow?below:Math.max(m,above);p.classList.add(placeBelow?'gv-char-tip-portal_below':'gv-char-tip-portal_above');p.style.left=x+'px';p.style.top=y+'px';p.style.setProperty('--gv-tip-arrow-x',clamp(r.left+r.width/2-x,16,w-16)+'px')}function openHelp(b,e){stop(e);var w=b&&b.closest('.gv-char-help-wrap'),open=w&&w.classList.contains('gv-char-tip-open'),text=tipText(b);if(open&&document.querySelector('.gv-char-tip-portal_open'))return;closeTips(document);if(w){w.classList.add('gv-char-tip-open');b.setAttribute('aria-expanded','true');if(text)showPortal(b,text)}}[].slice.call(box.querySelectorAll('.gv-char-help')).forEach(function(b){b.dataset.gvTipBound='1'});[].slice.call(box.querySelectorAll('.gv-char-tip-close')).forEach(function(b){if(b.dataset.gvTipBound==='1')return;b.dataset.gvTipBound='1';function close(e){stop(e);closeTips(document)}b.addEventListener('click',close,true);b.addEventListener('touchstart',close,true);b.addEventListener('touchend',close,true);b.addEventListener('pointerup',function(e){if(e.pointerType&&e.pointerType!=='mouse')close(e)},true)});if(window.gvCharTipsDocBound!=='v4'){window.gvCharTipsDocBound='v4';var suppressUntil=0;function helpTarget(e){return e.target&&e.target.closest&&e.target.closest('.gv-char-help')}function closeTarget(e){return e.target&&e.target.closest&&e.target.closest('.gv-char-tip-portal-close')}function handleHelp(e){var b=helpTarget(e);if(!b)return false;suppressUntil=Date.now()+900;openHelp(b,e);return true}document.addEventListener('touchstart',function(e){if(closeTarget(e)){stop(e);closeTips(document);return}handleHelp(e)},true);document.addEventListener('touchend',function(e){if(closeTarget(e)||helpTarget(e))stop(e)},true);document.addEventListener('pointerup',function(e){if(e.pointerType&&e.pointerType!=='mouse'){if(closeTarget(e)){stop(e);closeTips(document);return}if(helpTarget(e)){if(Date.now()<suppressUntil)stop(e);else handleHelp(e)}}},true);document.addEventListener('click',function(e){if(closeTarget(e)){stop(e);closeTips(document);return}if(helpTarget(e)){if(Date.now()<suppressUntil){stop(e);return}handleHelp(e);return}if(!(e.target&&e.target.closest&&e.target.closest('.gv-char-help-wrap,.gv-char-tip-portal')))closeTips(document)},true);document.addEventListener('keydown',function(e){if(e.key==='Escape')closeTips(document)},true);addEventListener('resize',function(){closeTips(document)},true);addEventListener('scroll',function(){closeTips(document)},true)}}
      function bindUi(box){bindTabs(box);bindTips(box)}
      function tabContent(tabs,names){names=names||[];return [].slice.call((tabs||document).querySelectorAll(".t-catalog__tabs__item")).map(function(it){var btn=it.querySelector(".js-catalog-tab-button"),nameNode=it.querySelector(".t-catalog__tabs__item-title,.t-catalog__tabs__button-title"),titleText=c(btn&&btn.getAttribute("data-tab-title")||nameNode&&nameNode.textContent||it.textContent);return{it:it,title:titleText,content:it.querySelector(".t-catalog__tabs__content")||it}}).filter(function(x){return names.some(function(n){return x.title.indexOf(n)!==-1})})[0]}
      function customSig(r){var sku=c(first(r,".js-catalog-prod-sku,.js-product-sku,.t-catalog__prod-popup__sku")&&first(r,".js-catalog-prod-sku,.js-product-sku,.t-catalog__prod-popup__sku").textContent).replace(/^SKU:\s*/i,""),title=c(first(r,".js-catalog-prod-name,.js-product-name,.t-catalog__prod-popup__name")&&first(r,".js-catalog-prod-name,.js-product-name,.t-catalog__prod-popup__name").textContent),part=location.pathname.split("/tproduct/")[1]||"",uid=(part.split("/")[0]||"").split("-")[0]||r.dataset.productGenUid||r.dataset.productUid||"",textBox=r.querySelector(".js-catalog-prod-all-text"),list=rows(r);if(!list.length)list=rawRows(textBox);return[sku,uid,title,rowsSig(list)].join("|")}
      function customReady(r){var w=r&&r.querySelector(".gv-direct-product-tabs");if(!w)return false;var sig=customSig(r),list=listFor(r);if(w.dataset.gvProductSig!==sig||needsTips(w,list)){w.remove();return false}[].slice.call(r.querySelectorAll(".t-catalog__tabs")).forEach(function(n){n.remove()});[].slice.call(r.querySelectorAll(".js-catalog-prod-all-text")).forEach(function(n){if(!w.contains(n))n.innerHTML=""});var ch=r.querySelector(".js-catalog-prod-all-charcs");if(ch)ch.style.display="none";bindUi(w);return true}
      function directNative(r){var tabs=r&&r.querySelector(".t-catalog__tabs");if(!tabs)return false;var charcs=r.querySelector(".js-catalog-prod-all-charcs"),textBox=r.querySelector(".js-catalog-prod-all-text"),sku=c(first(r,".js-catalog-prod-sku,.js-product-sku,.t-catalog__prod-popup__sku")&&first(r,".js-catalog-prod-sku,.js-product-sku,.t-catalog__prod-popup__sku").textContent).replace(/^SKU:\s*/i,""),title=c(first(r,".js-catalog-prod-name,.js-product-name,.t-catalog__prod-popup__name")&&first(r,".js-catalog-prod-name,.js-product-name,.t-catalog__prod-popup__name").textContent),part=location.pathname.split("/tproduct/")[1]||"",uid=(part.split("/")[0]||"").split("-")[0]||r.dataset.productGenUid||r.dataset.productUid||"",list=rows(r);if(!list.length)list=rawRows(textBox);var about=tabContent(tabs,["О товаре","Описание"]),desc=sourceDesc(about&&about.content||textBox||tabs);if(weak(desc,title))desc=generated(title,list)||fallbacks[sku]||fallbacks[uid]||desc;var charsTab=tabContent(tabs,["Характеристики"]),wrap=document.createElement("div"),showChars=!!(charsTab&&/active/.test(charsTab.it.className)),host=r.querySelector(".t-catalog__prod-popup__info,.t-catalog__prod-popup__col-right")||tabs.parentNode;wrap.className="gv-direct-product-tabs";wrap.dataset.gvProductSig=[sku,uid,title,rowsSig(list)].join("|");wrap.innerHTML='<div class="gv-mobile-tabs"><button class="gv-mobile-tab '+(showChars?'':'gv-mobile-tab_active')+'" type="button" data-gv-tab="d">О товаре</button><button class="gv-mobile-tab '+(showChars?'gv-mobile-tab_active':'')+'" type="button" data-gv-tab="c">Характеристики</button></div><div class="gv-mobile-tab-panel '+(showChars?'':'gv-mobile-tab-panel_active')+'"><p>'+esc(desc||'Описание отсутствует')+'</p></div><div class="gv-mobile-tab-panel '+(showChars?'gv-mobile-tab-panel_active':'')+'">'+charsHtml(list)+'</div>';[].slice.call(r.querySelectorAll(".gv-direct-product-tabs,.gv-mobile-tabs,.gv-mobile-tab-panel")).forEach(function(n){if(!wrap.contains(n))n.remove()});if(host&&host.contains(tabs))host.replaceChild(wrap,tabs);else{tabs.parentNode&&tabs.parentNode.removeChild(tabs);host.appendChild(wrap)}if(charcs)charcs.style.display="none";bindUi(wrap);return true}
      function build(r){
        var box=r&&r.querySelector('.js-catalog-prod-all-text');if(!box)return;
        var sku=c(first(r,'.js-catalog-prod-sku,.js-product-sku,.t-catalog__prod-popup__sku')&&first(r,'.js-catalog-prod-sku,.js-product-sku,.t-catalog__prod-popup__sku').textContent).replace(/^SKU:\\s*/i,'');
        var title=c(first(r,'.js-catalog-prod-name,.js-product-name,.t-catalog__prod-popup__name')&&first(r,'.js-catalog-prod-name,.js-product-name,.t-catalog__prod-popup__name').textContent);
        var part2=location.pathname.split('/tproduct/')[1]||'';var uid=(part2.split('/')[0]||'').split('-')[0]||r.dataset.productGenUid||r.dataset.productUid||'';
        var list=rows(r);if(!list.length)list=rawRows(box);var desc=sourceDesc(box);if(weak(desc,title))desc=generated(title,list)||fallbacks[sku]||fallbacks[uid]||desc;
        var nextChars=rowsSig(list);
        var oldPanels=box.querySelectorAll('.gv-mobile-tab-panel'),oldChars=panelSig(oldPanels[1])||c(oldPanels[1]&&oldPanels[1].textContent),showChars=!!(box.querySelector('.gv-mobile-tab[data-gv-tab="c"].gv-mobile-tab_active')||(oldPanels[1]&&oldPanels[1].classList.contains('gv-mobile-tab-panel_active'))),isGrouped=!!(oldPanels[1]&&oldPanels[1].querySelector('.gv-char-row'));if(!weak(c(oldPanels[0]&&oldPanels[0].textContent),title)&&oldChars&&isGrouped&&(!nextChars||oldChars===nextChars)&&!needsTips(box,list)){box.dataset.gvMobileTabsReady='1';bindUi(box);return}
        var charHtml=charsHtml(list);
        box.innerHTML='<div class="gv-mobile-tabs"><button class="gv-mobile-tab '+(showChars?'':'gv-mobile-tab_active')+'" type="button" data-gv-tab="d">О товаре</button><button class="gv-mobile-tab '+(showChars?'gv-mobile-tab_active':'')+'" type="button" data-gv-tab="c">Характеристики</button></div><div class="gv-mobile-tab-panel '+(showChars?'':'gv-mobile-tab-panel_active')+'"><p>'+esc(desc||'Описание отсутствует')+'</p></div><div class="gv-mobile-tab-panel '+(showChars?'gv-mobile-tab-panel_active':'')+'">'+charHtml+'</div>';
        box.dataset.gvMobileTabsReady='1';
        var ch=r.querySelector('.js-catalog-prod-all-charcs');if(ch)ch.style.display='none';
        bindUi(box)
      }
      function run(){var r=root();if(location.pathname.indexOf('/tproduct/')!==-1&&r){if(customReady(r))return;if(directNative(r))return;if(!/product-popup/.test(r.className)){build(r);return}}if(!nativeFix(r))build(r)}
      var queued=0;
      function sched(){
        if(queued)return;
        queued=1;
        setTimeout(function(){queued=0;run();setTimeout(run,400);setTimeout(run,1200)},80)
      }
      if(!window.gvIosSelectGuardInstalled){window.gvIosSelectGuardInstalled=1;var until=0;function mark(e){if(e.target&&e.target.closest&&e.target.closest('.gv-pf__select'))until=Date.now()+3000}['touchstart','pointerdown','focusin','click'].forEach(function(x){document.addEventListener(x,mark,true)});addEventListener('resize',function(e){if(Date.now()<until)e.stopImmediatePropagation()},true)}
      function watch(){bindTips(document);sched();var n=0,t=setInterval(function(){run();if(++n>24)clearInterval(t)},500);var target=document.body||document.documentElement;if(target&&!window.gvMobileTabsObserver){window.gvMobileTabsObserver=new MutationObserver(sched);window.gvMobileTabsObserver.observe(target,{childList:true,subtree:true,characterData:true})}}
      document.readyState==='loading'?document.addEventListener('DOMContentLoaded',watch):watch();addEventListener('load',sched);addEventListener('resize',sched);window.gvRepairMobileProductTabs=run
    })();
  })();

  // gv-chars-widget-poc-script
  (function(){
    (function(){
      if(window.GVCharsWidgetPoc)return;
      var ENABLE_PARAM='gv_chars_widget';
      var tips={};
      function addTip(names,text){names.forEach(function(name){tips[key(name)]=text})}
      function c(value){return String(value||'').replace(/\u00a0/g,' ').replace(/\s+/g,' ').trim()}
      function key(value){return c(value).toLowerCase().replace(/ё/g,'е').replace(/:$/,'')}
      function esc(value){return String(value==null?'':value).replace(/[&<>"']/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]})}
      function enabled(){return window.GV_CHARS_WIDGET_FORCE||new URLSearchParams(location.search).has(ENABLE_PARAM)}
      function visible(node){if(!node)return false;var r=node.getBoundingClientRect(),s=getComputedStyle(node);return r.width>0&&r.height>0&&s.display!=='none'&&s.visibility!=='hidden'}
      addTip(['Мощность номинальная','Номинальная мощность'],'Мощность генератора. Оптимальная работа генератора происходит при суммарной нагрузке потребителей 75%-80%');
      addTip(['Мощность максимальная'],'Напоминаем, что на максимальной мощности допускается работа генератора не более 10% от общего времени.');
      addTip(['Напряжение'],'Напряжение генератора на выходе.');
      addTip(['Исполнение'],'Кожух и контейнер позволяют устанавливать генератор на улице.');
      addTip(['Тип запуска','Пуск'],'Ручной запуск имеют, как правило, генераторы небольшой мощности. У промышленных генераторов - электростартер.');
      addTip(['Автоматизация','Степень автоматизации'],'2-я степень автоматизации позволяет автоматически включаться генератору при пропадании сети и отключаться при появлении.');
      addTip(['Количество цилиндров'],'Чем больше цилиндров, тем более высокое соотношение мощности к весу агрегата.');
      addTip(['Охлаждение','Система охлаждения'],'Тип охлаждения двигателя: воздушный или жидкостный.');
      addTip(['Обороты двигателя','Частота вращения двигателя'],'3000 или 1500 об/мин. 1500 об/мин имеют больший моторесурс и низкий уровень шума и вибрации.');
      addTip(['Количество фаз','Число фаз'],'1 или 3. При небольших нагрузках и отсутствии 3-фазных потребителей рекомендуем 1 фазу.');
      addTip(['Частота тока','Частота'],'Частота напряжения. В наших сетях принята 50 Гц.');
      addTip(['Уровень шума'],'Шепот - 10 дБ. Разговор средней громкости - 50 дБ. Поезд в метро - 80 дБ. Болевой порог - 120 дБ.');
      var sections=[
        ['Основные характеристики',/^(напряжение|модель электростанции|мощность|исполнение|тип запуска|автоматизация|степень автоматизации)/i],
        ['Двигатель',/(двигател|цилиндр|охлаждение|обороты|объем масла|объём масла|объем двигателя|объём двигателя)/i],
        ['Топливная система',/(топлив|расход|время работы|автоном)/i],
        ['Электрогенератор',/(фаз|частота|cos|коэффициент|тип генератора|номинальный ток)/i],
        ['Габариты и масса',/(длина|ширина|высота|вес)/i],
        ['Производитель',/(производитель|страна|гарантия|серия|бренд)/i],
        ['Дополнительные характеристики',/.*/]
      ];
      function sectionFor(name){for(var i=0;i<sections.length-1;i++){if(sections[i][1].test(name))return sections[i][0]}return 'Дополнительные характеристики'}
      function parsePair(text){
        text=c(text).replace(/^[-•]\s*/,'');
        var match=text.match(/^([^:]{2,80}):\s*(.+)$/);
        if(!match)return null;
        var title=c(match[1]).replace(/:$/,''),value=c(match[2]);
        return title&&value?{title:title,value:value}:null;
      }
      function pushUnique(out,seen,pair){if(!pair)return;var sig=key(pair.title)+'|'+key(pair.value);if(seen[sig])return;seen[sig]=1;out.push(pair)}
      function rowsFrom(root){
        var out=[],seen={};
        Array.prototype.forEach.call(root.querySelectorAll('.js-catalog-prod-all-charcs li,.js-catalog-prod-all-charcs,.t-catalog__tabs__content li'),function(node){pushUnique(out,seen,parsePair(node.textContent))});
        Array.prototype.forEach.call(root.querySelectorAll('.gv-char-row'),function(row){
          var title=c((row.querySelector('.gv-char-label,.gv-char-name,.gvw-char-label,.gvw-char-name')||{}).textContent).replace(/[?×].*$/,'').replace(/:$/,'');
          var value=c((row.querySelector('.gv-char-value,.gvw-char-value')||{}).textContent);
          pushUnique(out,seen,title&&value?{title:title,value:value}:null);
        });
        return out;
      }
      function helpHtml(title){var text=tips[key(title)];if(!text)return '';return '<button class="gvw-char-help" type="button" aria-label="Подсказка: '+esc(title)+'" data-gvw-tip="'+esc(text)+'">?</button>'}
      function render(rows){
        var groups={},html='';
        sections.forEach(function(section){groups[section[0]]=[]});
        rows.forEach(function(row){groups[sectionFor(row.title)].push(row)});
        sections.forEach(function(section){
          var items=groups[section[0]]||[];
          if(!items.length)return;
          html+='<section class="gvw-char-section"><div class="gvw-char-section-title">'+esc(section[0])+'</div>';
          items.forEach(function(item){html+='<div class="gvw-char-row"><div class="gvw-char-name"><span class="gvw-char-label">'+esc(item.title)+':</span>'+helpHtml(item.title)+'</div><div class="gvw-char-value">'+esc(item.value)+'</div></div>'});
          html+='</section>';
        });
        return '<div class="gvw-char-widget" data-gvw-ready="1">'+html+'</div>';
      }
      function findHost(root){
        var panels=Array.prototype.slice.call(root.querySelectorAll('.gv-mobile-tab-panel,.t-catalog__tabs__content'));
        var chars=panels.find(function(panel){return panel.querySelector('.gv-char-row,.js-catalog-prod-all-charcs')});
        if(!chars)chars=panels.find(function(panel){return /характеристики|основные характеристики|мощность номинальная/i.test(c(panel.textContent))});
        return chars||root.querySelector('.js-catalog-prod-all-charcs')||root;
      }
      function productRoot(){return Array.prototype.slice.call(document.querySelectorAll('.js-catalog-product')).find(visible)||document}
      function install(root){
        if(!enabled())return;
        root=root||productRoot();
        var rows=rowsFrom(root);
        if(rows.length<3)return;
        var host=findHost(root);
        if(!host)return;
        var sig=rows.map(function(row){return key(row.title)+':'+key(row.value)}).join('|');
        var existing=host.querySelector('.gvw-char-widget');
        if(existing&&existing.dataset.gvwSig===sig)return;
        host.querySelectorAll('.gvw-char-widget').forEach(function(node){node.remove()});
        host.insertAdjacentHTML('afterbegin',render(rows));
        host.querySelector('.gvw-char-widget').dataset.gvwSig=sig;
      }
      function closeTip(){var tip=document.querySelector('.gvw-char-tip');if(tip)tip.remove()}
      function openTip(button,event){
        if(event){event.preventDefault();event.stopPropagation();if(event.stopImmediatePropagation)event.stopImmediatePropagation()}
        closeTip();
        var text=button.getAttribute('data-gvw-tip');if(!text)return;
        var rect=button.getBoundingClientRect(),margin=12,gap=10,width=innerWidth>980?320:Math.min(500,innerWidth-margin*2);
        var tip=document.createElement('div');
        tip.className='gvw-char-tip';
        tip.innerHTML='<button class="gvw-char-tip-close" type="button" aria-label="Закрыть подсказку">×</button><span>'+esc(text)+'</span>';
        document.body.appendChild(tip);
        tip.style.width=width+'px';
        tip.classList.add('gvw-char-tip_open');
        var height=tip.offsetHeight;
        var x=innerWidth>980?Math.max(margin,Math.min(innerWidth-width-margin,rect.right+12)):Math.max(margin,Math.min(innerWidth-width-margin,rect.left+rect.width/2-width/2));
        var below=rect.bottom+gap,above=rect.top-gap-height,placeBelow=below+height<=innerHeight-margin||above<margin;
        var y=placeBelow?below:Math.max(margin,above);
        tip.classList.add(placeBelow?'gvw-char-tip_below':'gvw-char-tip_above');
        tip.style.left=x+'px';tip.style.top=y+'px';
        tip.style.setProperty('--gvw-tip-arrow-x',Math.max(16,Math.min(width-16,rect.left+rect.width/2-x))+'px');
      }
      function bind(){
        document.addEventListener('click',function(event){
          var close=event.target.closest&&event.target.closest('.gvw-char-tip-close');
          if(close){event.preventDefault();closeTip();return}
          var button=event.target.closest&&event.target.closest('.gvw-char-help');
          if(button){openTip(button,event);return}
          if(!(event.target.closest&&event.target.closest('.gvw-char-tip')))closeTip();
        },true);
        document.addEventListener('touchstart',function(event){
          var button=event.target.closest&&event.target.closest('.gvw-char-help');
          if(button)openTip(button,event);
        },true);
        addEventListener('resize',closeTip,true);
        addEventListener('scroll',closeTip,true);
      }
      function mutationIsRelevant(mutations){
        return Array.prototype.some.call(mutations,function(mutation){
          if(mutation.target&&mutation.target.closest&&mutation.target.closest('.js-catalog-product,.t-store__prod-popup,.js-store-prod-popup'))return true;
          return Array.prototype.some.call(mutation.addedNodes||[],function(node){
            if(node.nodeType!==1)return false;
            if(node.closest&&node.closest('.gvw-char-widget,.gvw-char-tip'))return false;
            return /t-store|js-store|t-popup|gv-char/.test(node.className||'');
          });
        });
      }
      function start(){
        install();
        var count=0,timer=setInterval(function(){install();if(++count>120)clearInterval(timer)},500);
        new MutationObserver(function(mutations){if(mutationIsRelevant(mutations))requestAnimationFrame(install)}).observe(document.documentElement,{childList:true,subtree:true});
        ['click','touchstart','pointerup'].forEach(function(type){
          document.addEventListener(type,function(){setTimeout(install,60)},true);
        });
      }
      window.GVCharsWidgetPoc={install:install,closeTip:closeTip,version:'poc-1'};
      bind();
      document.readyState==='loading'?document.addEventListener('DOMContentLoaded',start):start();
    })();
  })();

  // gv-product-island-preact
  (function(){
    (function () {
      var DISABLE_RE = /[?&](?:gv_preact_product=0|gv_no_product_island=1)(?:&|$)/;
      if (DISABLE_RE.test(location.search)) return;
      if (window.gvProductIslandInstalled) return;
      window.gvProductIslandInstalled = 1;
    
    // constants.js
    var PREACT_URL = 'https://cdn.jsdelivr.net/npm/preact@10.26.9/dist/preact.umd.min.js';
    var HOOKS_URL = 'https://cdn.jsdelivr.net/npm/preact@10.26.9/hooks/dist/hooks.umd.min.js';
    
    var roots = new WeakMap();
    var queued = 0;
    var apiPromise = null;
    
    // utils.js
    function clean(value) {
      return String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
    }
    
    function escapeHtml(value) {
      return String(value || '').replace(/[&<>"']/g, function (char) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
      });
    }
    
    function key(value) {
      return clean(value)
        .toLowerCase()
        .replace(/ё/g, 'е')
        .replace(/[^0-9a-zа-яφ]+/g, ' ')
        .trim();
    }
    
    function isVisible(element) {
      if (!element) return false;
      for (var node = element; node && node !== document.body; node = node.parentElement) {
        var style = getComputedStyle(node);
        if (style.display === 'none' || style.visibility === 'hidden') return false;
      }
      var rect = element.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }
    
    function first(root, selector) {
      var nodes = Array.prototype.slice.call((root || document).querySelectorAll(selector));
      return nodes.find(isVisible) || nodes[0] || null;
    }
    
    // dom.js
    function productRoot() {
      var products = Array.prototype.slice
        .call(document.querySelectorAll('.js-catalog-product'))
        .filter(isVisible);
      return products.find(function (node) { return /product-popup/.test(node.className); }) || products[0] || null;
    }
    
    // rows.js
    function pushRow(rows, seen, title, value) {
      title = clean(title).replace(/:\s*$/, '');
      value = clean(value);
      if (!title || !value) return;
    
      var rowKey = key(title);
      if (seen[rowKey]) return;
    
      seen[rowKey] = 1;
      rows.push({ title: title, value: value });
    }
    
    function parseInto(text, rows, seen) {
      clean(text).split(/(?=[А-ЯЁA-Z][^:]{1,70}: *)/).forEach(function (part) {
        var match = clean(part).match(/^([^:]+): *(.+)$/);
        if (match) pushRow(rows, seen, match[1], match[2]);
      });
    }
    
    function parseRows(text) {
      var seen = {};
      var rows = [];
      parseInto(text, rows, seen);
      return rows;
    }
    
    function collectRows(root) {
      var seen = {};
      var rows = [];
    
      Array.prototype.slice.call((root || document).querySelectorAll('.gv-char-row')).forEach(function (row) {
        pushRow(
          rows,
          seen,
          (row.querySelector('.gv-char-label') || row.querySelector('.gv-char-name') || {}).textContent,
          (row.querySelector('.gv-char-value') || {}).textContent
        );
      });
      if (rows.length) return rows;
    
      Array.prototype.slice.call((root || document).querySelectorAll('.js-catalog-prod-charcs,.t-typography__characteristics')).forEach(function (node) {
        parseInto(node.textContent, rows, seen);
      });
      if (rows.length) return rows;
    
      Array.prototype.slice.call((root || document).querySelectorAll('.js-catalog-prod-all-charcs li,.js-catalog-prod-all-charcs,.t-catalog__tabs__content li')).forEach(function (node) {
        parseInto(node.textContent, rows, seen);
      });
      return rows;
    }
    
    function valueByTitle(rows, names) {
      names = names.map(key);
      var row = (rows || []).find(function (item) {
        return names.indexOf(key(item.title)) !== -1;
      });
      return clean(row && row.value);
    }
    
    // description.js
    function weakDescription(text, title) {
      text = clean(text);
      title = clean(title);
      return (
        !text ||
        text.length < 80 ||
        !!(title && text.toLowerCase() === title.toLowerCase()) ||
        !!(title && text.length <= title.length + 30 && text.toLowerCase().indexOf(title.toLowerCase()) !== -1)
      );
    }
    
    var descriptionFallbacks = {
      '112890': 'Газо-бензиновый генератор Mitsui Power Eco ZM 9500 GE - это однофазный генератор с максимальной мощностью 8.5 кВт/8.5 кВА и напряжением 230 В. У электростанции установлен двигатель Mitsui число оборотов которого достигает 3000 об/мин. Страной бренда Mitsui Power является Япония. Купить газо-бензиновый генератор Mitsui Power Eco ZM 9500 GE можно, оформив заказ на нашем сайте, либо позвонив по телефону +7 (495) 492-52-62. В нашем магазине представлены бензиновые генераторы известных мировых производителей.',
      '779570466952': 'Газо-бензиновый генератор Mitsui Power Eco ZM 9500 GE - это однофазный генератор с максимальной мощностью 8.5 кВт/8.5 кВА и напряжением 230 В. У электростанции установлен двигатель Mitsui число оборотов которого достигает 3000 об/мин. Страной бренда Mitsui Power является Япония. Купить газо-бензиновый генератор Mitsui Power Eco ZM 9500 GE можно, оформив заказ на нашем сайте, либо позвонив по телефону +7 (495) 492-52-62. В нашем магазине представлены бензиновые генераторы известных мировых производителей.',
    };
    
    function generatedDescription(title, rows) {
      title = clean(title);
      if (!title) return '';
    
      var fuel = valueByTitle(rows, ['Тип топлива']);
      var voltage = valueByTitle(rows, ['Напряжение']);
      var nominalPower = valueByTitle(rows, ['Мощность номинальная']);
      var maxPower = valueByTitle(rows, ['Мощность максимальная']);
      var execution = valueByTitle(rows, ['Исполнение']);
      var start = valueByTitle(rows, ['Тип запуска']);
      var engineBrand = valueByTitle(rows, ['Бренд двигателя']);
      var engineModel = valueByTitle(rows, ['Модель двигателя']);
      var cooling = valueByTitle(rows, ['Охлаждение']);
      var tank = valueByTitle(rows, ['Объём топливного бака', 'Объем топливного бака']);
      var consumption = valueByTitle(rows, ['Расход топлива при 75% мощности']);
      var runtime = valueByTitle(rows, ['Время работы при 75% мощности']);
      var phases = valueByTitle(rows, ['Количество фаз']);
      var maker = valueByTitle(rows, ['Производитель']);
      var warranty = valueByTitle(rows, ['Гарантия']);
    
      var details = [];
      if (fuel) details.push('тип топлива: ' + fuel);
      if (phases) details.push(phases);
      if (nominalPower) details.push('номинальная мощность ' + nominalPower);
      if (maxPower) details.push('максимальная мощность ' + maxPower);
      if (voltage) details.push('напряжение ' + voltage);
    
      var text = title + ' - генератор' + (details.length ? ' (' + details.join(', ') + ')' : '') + '.';
      var params = [];
      if (execution) params.push('исполнение: ' + execution);
      if (start) params.push('запуск: ' + start);
      if (engineBrand || engineModel) params.push('двигатель ' + [engineBrand, engineModel].filter(Boolean).join(' '));
      if (cooling) params.push('охлаждение: ' + cooling);
      if (tank) params.push('топливный бак ' + tank);
      if (params.length) text += ' Основные параметры: ' + params.join(', ') + '.';
      if (consumption || runtime) {
        text += ' При нагрузке 75% ' + [
          consumption ? 'расход топлива составляет ' + consumption : '',
          runtime ? 'время работы - ' + runtime : '',
        ].filter(Boolean).join(', ') + '.';
      }
      if (maker || warranty) {
        text += ' ' + [
          maker ? 'Производитель: ' + maker : '',
          warranty ? 'гарантия: ' + warranty : '',
        ].filter(Boolean).join('; ') + '.';
      }
      return text;
    }
    
    function safeText(node) {
      if (!node) return '';
      var clone = node.cloneNode(true);
      Array.prototype.slice.call(clone.querySelectorAll([
        'style',
        'script',
        'noscript',
        'svg',
        '.gv-mobile-tabs',
        '.gv-mobile-tab-panel',
        '.gv-char-sections',
        '.js-catalog-prod-all-charcs',
        '.t-catalog__tabs__controls',
        '.t-catalog__tabs__controls-wrap',
        '.t-catalog_tabs_controls-wrap',
        '.t-catalog__tabs__button',
        '.t-catalog__tabs__item-title',
        '.t-catalog__tabs__button-title',
      ].join(','))).forEach(function (child) {
        child.remove();
      });
      return clean(clone.textContent);
    }
    
    function cleanDescriptionText(text) {
      return clean(text)
        .replace(/^О товаре\s*/, '')
        .replace(/^Описание\s*/, '')
        .split(/Характеристики|Основные характеристики|Двигатель|Топливная система|Электрогенератор|Дополнительные характеристики|Габариты и масса|Производитель/)[0];
    }
    
    function tabNode(root, names) {
      names = names || [];
      return Array.prototype.slice.call((root || document).querySelectorAll('.t-catalog__tabs__item')).map(function (item) {
        var button = item.querySelector('.js-catalog-tab-button');
        var titleNode = item.querySelector('.t-catalog__tabs__item-title,.t-catalog__tabs__button-title');
        var title = clean((button && button.getAttribute('data-tab-title')) || (titleNode && titleNode.textContent) || item.textContent);
        return {
          title: title,
          content: item.querySelector('.t-catalog__tabs__content') || item,
        };
      }).filter(function (item) {
        return names.some(function (name) { return item.title.indexOf(name) !== -1; });
      })[0];
    }
    
    function sourceDescription(root, title, rows, sku, uid) {
      var panels = Array.prototype.slice.call((root || document).querySelectorAll('.gv-mobile-tab-panel'));
      var description = cleanDescriptionText(safeText(panels[0]));
      if (!weakDescription(description, title)) return description;
    
      var about = tabNode(root, ['О товаре', 'Описание']);
      description = cleanDescriptionText(safeText(about && about.content));
      if (!weakDescription(description, title)) return description;
    
      var source = first(root, '.js-catalog-prod-all-text,.t-catalog__tabs');
      description = cleanDescriptionText(safeText(source).replace(/^О товаре\s*Характеристики\s*/, ''));
      if (weakDescription(description, title)) {
        description = generatedDescription(title, rows) || descriptionFallbacks[sku] || descriptionFallbacks[uid] || description;
      }
      return description;
    }
    
    // sections.js
    var sectionDefs = [
      ['Основные характеристики', ['Напряжение', 'Модель электростанции', 'Мощность номинальная', 'Мощность максимальная', 'Исполнение', 'Тип запуска', 'Автоматизация']],
      ['Двигатель', ['Бренд двигателя', 'Модель двигателя', 'Мощность двигателя', 'Объем двигателя', 'Объём двигателя', 'Охлаждение', 'Обороты двигателя', 'Количество цилиндров', 'Объем масла', 'Объём масла', 'Тип двигателя', 'Регулировка оборотов']],
      ['Топливная система', ['Тип топлива', 'Объём топливного бака', 'Объем топливного бака', 'Расход топлива при 50% мощности', 'Расход топлива при 75% мощности', 'Расход топлива при 100% мощности', 'Время работы при 50% мощности', 'Время работы при 75% мощности', 'Время работы при 100% мощности']],
      ['Электрогенератор', ['Количество фаз', 'Производитель альтернатора', 'Тип электрогенератора', 'Вид электрогенератора', 'Номинальный ток', 'Частота тока', 'Cos φ', 'Cos ф', 'Коэффициент мощности', 'Степень защиты от пыли и влаги']],
      ['Дополнительные характеристики', ['Уровень шума', 'Инверторная модель', 'Функция сварки', 'Шасси/колеса', 'PG']],
      ['Габариты и масса', ['Длина', 'Ширина', 'Высота', 'Вес', 'Габариты']],
      ['Производитель', ['Производитель', 'Страна бренда', 'Страна производства', 'Серия', 'Гарантия']],
    ];
    
    var sectionMap = null;
    
    function sectionFor(title) {
      if (!sectionMap) {
        sectionMap = {};
        sectionDefs.forEach(function (section) {
          section[1].forEach(function (name) {
            sectionMap[key(name)] = section[0];
          });
        });
      }
    
      var normalized = key(title);
      if (sectionMap[normalized]) return sectionMap[normalized];
      if (/альтернатор|электрогенератор|\bфаз|\bток\b|частота|cos|защит/.test(normalized)) return 'Электрогенератор';
      if (/двигател|цилиндр|охлаждение|обороты|масл/.test(normalized)) return 'Двигатель';
      if (/топлив|бака|расход|время работы/.test(normalized)) return 'Топливная система';
      if (/длина|ширина|высота|вес|габарит/.test(normalized)) return 'Габариты и масса';
      if (/производитель|страна|гарантия|серия/.test(normalized)) return 'Производитель';
      return 'Дополнительные характеристики';
    }
    
    function groupedRows(rows) {
      var bySection = {};
      sectionDefs.forEach(function (section) {
        bySection[section[0]] = [];
      });
      (rows || []).forEach(function (row) {
        (bySection[sectionFor(row.title)] || bySection['Дополнительные характеристики']).push(row);
      });
      return sectionDefs.map(function (section) {
        return { title: section[0], rows: bySection[section[0]] || [] };
      }).filter(function (section) {
        return section.rows.length;
      });
    }
    
    // tips.js
    var tips = {};
    
    function addTip(names, text) {
      names.forEach(function (name) {
        tips[key(name)] = text;
      });
    }
    
    addTip(['Мощность номинальная'], 'Мощность генератора. Оптимальная работа генератора происходит при суммарной нагрузке потребителей 75%-80%');
    addTip(['Мощность максимальная'], 'Напоминаем, что на максимальной мощности допускается работа генератора не более 10% от общего времени.');
    addTip(['Коэффициент мощности', 'Cos φ', 'Cos ф'], 'Отношение активной мощности к полной. Если объект потребляет 900 кВт и 1000 кВА, коэффициент мощности составляет 0,9 cos φ или 90%, чем значение ближе к 1, тем лучше.');
    addTip(['Напряжение'], 'Напряжение генератора на выходе.');
    addTip(['Исполнение'], 'Кожух и контейнер позволяют устанавливать генератор на улице.');
    addTip(['Пуск', 'Тип запуска'], 'Ручной запуск имеют, как правило, генераторы небольшой мощности. У промышленных генераторов - электростартер.');
    addTip(['Степень автоматизации', 'Автоматизация'], '2-я степень автоматизации (за счет наличия блока АВР) позволяет автоматически включаться генератору при пропадании сети и отключаться при появлении.');
    addTip(['Ток', 'Номинальный ток'], 'Величина измеряется в Амперах. Для определения требуемой мощности необходимо знать какой ток соответствует прибору.');
    addTip(['Количество цилиндров'], 'Чем больше цилиндров, тем более высокое соотношение мощности к весу агрегата.');
    addTip(['Номинальная мощность двигателя', 'Мощность двигателя'], 'Обычно, величина именно этого показателя заявляется производителем как расчетная характеристика на протяжении всего периода эксплуатации.');
    addTip(['Рабочий объем двигателя', 'Рабочий объём двигателя', 'Объем двигателя', 'Объём двигателя'], 'Двигатель у которого рабочий объем больше, прослужит гораздо дольше, но и потребление топлива у него будет несколько выше.');
    addTip(['Система охлаждения', 'Охлаждение'], 'Тип охлаждения двигателя: воздушный или жидкостный.');
    addTip(['Объем системы смазки', 'Объём системы смазки', 'Объем масла', 'Объём масла'], 'Фактическое количество моторного масла');
    addTip(['Частота вращения двигателя', 'Обороты двигателя'], '3000 или 1500 об/мин. 1500 об/мин имеют больший моторесурс и низкий уровень шума и вибрации.');
    addTip(['Число фаз', 'Количество фаз'], '1 или 3. При небольших нагрузках и отсутствии 3-фазных потребителей рекомендуем 1 фазу.');
    addTip(['Частота', 'Частота тока'], 'Частота напряжения. В наших сетях принята 50 Гц');
    addTip(['Тип генератора', 'Тип электрогенератора', 'Вид электрогенератора'], 'Синхронный генератор конструктивно сложнее. Асинхронный генератор устроен гораздо проще.');
    addTip(['Время автономной работы при 75% мощности', 'Время работы при 75% мощности'], 'Время автономной работы от встроенного топливного бака, при нагрузке 75% от номинальной мощности');
    addTip(['Степень защиты', 'Степень защиты от пыли и влаги'], 'Наибольшую популярность приобрели степени защиты IP23 и IP54. Степень защиты IP23 способна защитить от крупных частиц более 12,5 мм и брызг с углом падения до 60°, подходит для эксплуатации в мало запыленных помещениях. IP54 обеспечивает почти полную защиту от загрязнений и пыли, а также от брызг с любого направления.');
    addTip(['Уровень шума'], 'Шепот - 10 дБ. Перелистывание газет - 20 дБ. Разговор средней громкости - 50 дБ. Поезд в метро - 80 дБ. Концерт рок-музыки - 100 дБ. Болевой порог - 120 дБ.');
    addTip(['Расход топлива метан', 'Расход топлива (метан)'], 'К данному типу относится в первую очередь магистральный газ');
    addTip(['Расход топлива пропан бутан', 'Расход топлива (пропан-бутан)'], 'Используется как правило в газовых баллонах, газгольдерах');
    addTip(['Класс изоляции'], 'Класс изоляции определяет надежность изоляционных материалов, используемых внутри генератора, чтобы предотвратить проникновение электрического тока в нежелательные места и обеспечить безопасность работы системы.');
    
    // product.js
    function collectProduct(root) {
      var skuNode = first(root, '.js-catalog-prod-sku,.js-product-sku,.t-catalog__prod-popup__sku');
      var titleNode = first(root, '.js-catalog-prod-name,.js-product-name,.t-catalog__prod-popup__name,.t-name');
      var pathPart = location.pathname.split('/tproduct/')[1] || '';
      var uid = (pathPart.split('/')[0] || '').split('-')[0] || root.dataset.productGenUid || root.dataset.productUid || '';
      var rows = collectRows(root);
    
      if (!rows.length) {
        var source = first(root, '.js-catalog-prod-all-text,.t-catalog__tabs');
        if (source) rows = parseRows(source.textContent);
      }
    
      var sku = clean(skuNode && skuNode.textContent).replace(/^SKU:\s*/i, '');
      var title = clean(titleNode && titleNode.textContent);
    
      return {
        sku: sku,
        uid: uid,
        title: title,
        desc: sourceDescription(root, title, rows, sku, uid) || 'Описание отсутствует',
        rows: rows,
        sig: [sku, uid, title, rows.map(function (row) {
          return key(row.title) + ':' + clean(row.value);
        }).join('|')].join('|'),
      };
    }
    
    // preact-loader.js
    function loadScript(url) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = resolve;
        script.onerror = function () { reject(new Error('script load failed: ' + url)); };
        document.head.appendChild(script);
      });
    }
    
    function loadPreact() {
      if (window.preact && window.preactHooks) return Promise.resolve(window.preact);
      if (apiPromise) return apiPromise;
    
      apiPromise = loadScript(PREACT_URL)
        .then(function () { return loadScript(HOOKS_URL); })
        .then(function () {
          if (!window.preact || !window.preactHooks) throw new Error('preact globals missing');
          return window.preact;
        });
      return apiPromise;
    }
    
    // ProductTabs.js
    function createProductTabsComponent(api) {
      var h = api.h;
      var hooks = window.preactHooks;
    
      function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }
    
      return function ProductTabs(props) {
        var activeState = hooks.useState('desc');
        var active = activeState[0];
        var setActive = activeState[1];
        var tipState = hooks.useState(null);
        var tip = tipState[0];
        var setTip = tipState[1];
    
        hooks.useEffect(function () {
          function close() { setTip(null); }
          addEventListener('resize', close, true);
          addEventListener('scroll', close, true);
          return function () {
            removeEventListener('resize', close, true);
            removeEventListener('scroll', close, true);
          };
        }, []);
    
        hooks.useEffect(function () {
          var portal = document.querySelector('.gv-product-island-tip-portal');
          if (!portal) {
            portal = document.createElement('div');
            portal.className = 'gv-char-tip-portal gv-product-island-tip-portal';
            portal.setAttribute('role', 'tooltip');
            document.body.appendChild(portal);
          }
    
          if (!tip) {
            portal.className = 'gv-char-tip-portal gv-product-island-tip-portal';
            portal.innerHTML = '';
            return;
          }
    
          portal.className = 'gv-char-tip-portal gv-product-island-tip-portal gv-char-tip-portal_open gv-char-tip-portal_' + tip.place;
          portal.style.left = tip.x + 'px';
          portal.style.top = tip.y + 'px';
          portal.style.width = tip.w + 'px';
          portal.style.setProperty('--gv-tip-arrow-x', tip.arrow + 'px');
          portal.innerHTML = '<button class="gv-char-tip-portal-close" type="button" aria-label="Закрыть подсказку">×</button><span>' + escapeHtml(tip.text) + '</span>';
    
          var closeButton = portal.querySelector('.gv-char-tip-portal-close');
          function close(event) {
            event.preventDefault();
            event.stopPropagation();
            setTip(null);
          }
          function closeFromOutside(event) {
            var target = event.target;
            if (!target) return;
            if (portal.contains(target)) return;
            if (target.closest && target.closest('.gv-product-island-help')) return;
            setTip(null);
          }
          function closeFromKey(event) {
            if (event.key === 'Escape') setTip(null);
          }
    
          if (closeButton) closeButton.addEventListener('click', close, true);
          document.addEventListener('pointerdown', closeFromOutside, true);
          document.addEventListener('touchstart', closeFromOutside, true);
          document.addEventListener('click', closeFromOutside, true);
          document.addEventListener('keydown', closeFromKey, true);
    
          return function () {
            if (closeButton) closeButton.removeEventListener('click', close, true);
            document.removeEventListener('pointerdown', closeFromOutside, true);
            document.removeEventListener('touchstart', closeFromOutside, true);
            document.removeEventListener('click', closeFromOutside, true);
            document.removeEventListener('keydown', closeFromKey, true);
          };
        }, [tip]);
    
        function openTip(event, title, text) {
          event.preventDefault();
          event.stopPropagation();
    
          var rect = event.currentTarget.getBoundingClientRect();
          var margin = 12;
          var viewportWidth = innerWidth;
          var viewportHeight = innerHeight;
          var center = clamp(rect.left + rect.width / 2, margin, viewportWidth - margin);
          var width = viewportWidth > 980 ? 320 : Math.min(500, viewportWidth - margin * 2);
          var x = clamp(center - 28, margin, viewportWidth - width - margin);
          var y = rect.bottom + 10;
          var place = 'below';
    
          if (y + 130 > viewportHeight - margin) {
            place = 'above';
            y = clamp(rect.top - 140, margin, viewportHeight - 72);
          }
    
          setTip({
            title: title,
            text: text,
            x: x,
            y: y,
            w: width,
            place: place,
            arrow: clamp(center - x, 16, width - 16),
          });
        }
    
        function renderTab(name, id) {
          return h('button', {
            class: 'gv-mobile-tab ' + (active === id ? 'gv-mobile-tab_active' : ''),
            type: 'button',
            role: 'tab',
            'aria-selected': active === id,
            onClick: function () {
              setActive(id);
              setTip(null);
            },
          }, name);
        }
    
        function renderRow(row) {
          var text = tips[key(row.title)] || '';
          return h('div', { class: 'gv-char-row', key: row.title },
            h('div', { class: 'gv-char-name' },
              h('span', { class: 'gv-char-name-inner' },
                h('span', { class: 'gv-char-label' }, row.title + ':'),
                text ? h('span', { class: 'gv-char-help-wrap' },
                  h('button', {
                    class: 'gv-product-island-help',
                    type: 'button',
                    'aria-label': 'Подсказка: ' + row.title,
                    'aria-expanded': tip && tip.title === row.title ? 'true' : 'false',
                    onMouseEnter: function (event) { openTip(event, row.title, text); },
                    onFocus: function (event) { openTip(event, row.title, text); },
                    onClick: function (event) { openTip(event, row.title, text); },
                  }, '?')
                ) : null
              )
            ),
            h('div', { class: 'gv-char-value' }, row.value)
          );
        }
    
        function renderSection(section) {
          return h('section', { class: 'gv-char-section', key: section.title },
            h('div', { class: 'gv-char-section-title' }, section.title),
            h('div', { class: 'gv-char-table' }, section.rows.map(renderRow))
          );
        }
    
        return h('div', { class: 'gv-product-island', 'data-gv-product-sig': props.data.sig },
          h('div', { class: 'gv-mobile-tabs', role: 'tablist' },
            renderTab('О товаре', 'desc'),
            renderTab('Характеристики', 'chars')
          ),
          h('div', {
            class: 'gv-mobile-tab-panel gv-product-island__desc ' + (active === 'desc' ? 'gv-mobile-tab-panel_active' : ''),
            style: { display: active === 'desc' ? 'block' : 'none' },
          }, h('p', null, props.data.desc)),
          h('div', {
            class: 'gv-mobile-tab-panel ' + (active === 'chars' ? 'gv-mobile-tab-panel_active' : ''),
            style: { display: active === 'chars' ? 'block' : 'none' },
          }, h('div', { class: 'gv-char-sections' }, groupedRows(props.data.rows).map(renderSection)))
        );
      };
    }
    
    // runtime.js
    function mount() {
      var root = productRoot();
      if (!root) return;
    
      var data = collectProduct(root);
      if (!data.title || !data.rows.length) return;
    
      loadPreact().then(function (api) {
        var host = root.querySelector('.t-catalog__prod-popup__info,.t-catalog__prod-popup__col-right') || first(root, '.js-catalog-prod-all-text') || root;
        if (!host) return;
    
        var old = roots.get(root);
        var node = old && old.node;
        if (!node || !document.documentElement.contains(node)) {
          node = document.createElement('div');
          node.className = 'gv-product-island-root';
          var existing = root.querySelector('.gv-direct-product-tabs,.t-catalog__tabs,.js-catalog-prod-all-text');
          if (existing && existing.parentNode) existing.parentNode.insertBefore(node, existing);
          else host.appendChild(node);
        }
    
        if (old && old.sig === data.sig) return;
    
        roots.set(root, { node: node, sig: data.sig });
        Array.prototype.slice.call(root.querySelectorAll('.gv-direct-product-tabs,.t-catalog__tabs,.js-catalog-prod-all-text,.js-catalog-prod-all-charcs')).forEach(function (hiddenNode) {
          hiddenNode.style.display = 'none';
        });
    
        api.render(api.h(createProductTabsComponent(api), { data: data }), node);
        document.documentElement.classList.add('gv-product-island-ready');
      }).catch(function (error) {
        console.warn('[genvolt] product island failed', error);
        document.documentElement.classList.add('gv-product-island-failed');
      });
    }
    
    function schedule() {
      if (queued) return;
      queued = 1;
      setTimeout(function () {
        queued = 0;
        mount();
        setTimeout(mount, 500);
        setTimeout(mount, 1500);
      }, 80);
    }
    
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule);
    else schedule();
    addEventListener('load', schedule);
    
    if (!window.gvProductIslandObserver) {
      window.gvProductIslandObserver = new MutationObserver(schedule);
      window.gvProductIslandObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }
    })();
  })();

  // gv-filter-island-preact
  (function(){
    (function () {
      var params = new URLSearchParams(location.search);
      if (params.has('gv_legacy_filters')) return;
      if (window.gvPreactFilterInstalled) return;
      window.gvPreactFilterInstalled = true;
    
      var PREACT_URL = 'https://cdn.jsdelivr.net/npm/preact@10.26.9/dist/preact.umd.min.js';
      var HOOKS_URL = 'https://cdn.jsdelivr.net/npm/preact@10.26.9/hooks/dist/hooks.umd.min.js';
      var GENERATOR_REC_ID = '2274215281';
      var apiPromise = null;
      var mountedRoot = null;
      var mountedHost = null;
      var mountedSignature = '';
    
      var brandByPath = {
        '/a-ipower': 'A-iPower',
        '/agg': 'AGG',
        '/ctg': 'CTG',
        '/denyo': 'Denyo',
        '/elemax': 'Elemax',
        '/energo': 'Energo',
        '/generac': 'Generac',
        '/gmgen': 'GMGen',
        '/gmp': 'GMP',
        '/hertz': 'Hertz',
        '/kub': 'KUB',
        '/kubota': 'Kubota',
        '/mitsui': 'Mitsui Power',
        '/motor': 'Motor',
        '/mvae': 'MVAE',
        '/poweron': 'Poweron',
        '/pramac': 'Pramac',
        '/sunreka': 'SUNREKA',
        '/toyo': 'Toyo',
        '/tss': 'ТСС',
      };
    
      var fuelByPath = {
        '/catalog/generators-benzinovye': ['бензин'],
        '/catalog/generators-diesel': ['дизель'],
        '/catalog/generators-gazovye': ['бензин - газ', 'газ'],
      };
    
      var primaryFields = [
        { label: 'Тип топлива', title: 'Тип топлива' },
        { label: 'Мощность, кВт', type: 'range', title: 'Мощность номинальная' },
        { label: 'Напряжение', title: 'Напряжение' },
        { label: 'Исполнение', title: 'Исполнение' },
        { label: 'Охлаждение', title: 'Охлаждение' },
        { label: 'Объем топливного бака', type: 'range', title: 'Объём топливного бака' },
        { label: 'Бренд', title: 'Бренд' },
        { label: 'Цена, руб.', type: 'price', title: 'Цена' },
      ];
    
      var advancedFields = [
        { label: 'Тип запуска', title: 'Тип запуска' },
        { label: 'Модель электростанции', title: 'Модель электростанции' },
        { label: 'Модель двигателя', title: 'Модель двигателя' },
        { label: 'Обороты двигателя', type: 'range', title: 'Обороты двигателя' },
        { label: 'Расход топлива при 50% мощности', type: 'range', title: 'Расход топлива при 50% мощности' },
        { label: 'Расход топлива при 75% мощности', type: 'range', title: 'Расход топлива при 75% мощности' },
        { label: 'Расход топлива при 100% мощности', type: 'range', title: 'Расход топлива при 100% мощности' },
        { label: 'Количество фаз', title: 'Количество фаз' },
        { label: 'Номинальный ток', type: 'range', title: 'Номинальный ток' },
        { label: 'Уровень шума', type: 'range', title: 'Уровень шума' },
        { label: 'Страна бренда', title: 'Страна бренда' },
        { label: 'Гарантия', title: 'Гарантия' },
        { label: 'Длина', type: 'range', title: 'Длина' },
        { label: 'Ширина', type: 'range', title: 'Ширина' },
        { label: 'Высота', type: 'range', title: 'Высота' },
        { label: 'Вес', type: 'range', title: 'Вес' },
      ];
    
      function clean(value) {
        return String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
      }
    
      function compareText(value) {
        return clean(value).toLowerCase().replace(/ё/g, 'е');
      }
    
      function isRendered(element) {
        if (!element) return false;
        var current = element;
        while (current && current !== document.body) {
          var style = getComputedStyle(current);
          if (style.display === 'none' || style.visibility === 'hidden') return false;
          current = current.parentElement;
        }
        var rect = element.getBoundingClientRect();
        return rect.width > 0 || rect.height > 0;
      }
    
      function visibleCatalog() {
        var catalogs = Array.prototype.slice.call(document.querySelectorAll('.js-catalog-cont-w-filter'));
        return catalogs.find(isRendered) || catalogs[0] || null;
      }
    
      function filterRoot() {
        var catalog = visibleCatalog();
        var rec = catalog && catalog.closest('.t-rec[id^="rec"]');
        return rec && (
          rec.querySelector('.js-sidebar-filters .t-catalog__filter__options') ||
          rec.querySelector('.t-catalog__filter__options')
        ) || document.querySelector('.js-sidebar-filters .t-catalog__filter__options') ||
          document.querySelector('.t-catalog__filter__options');
      }
    
      function items() {
        var root = filterRoot();
        return root ? Array.prototype.slice.call(root.querySelectorAll(':scope > .js-catalog-filter-item')) : [];
      }
    
      function itemByTitle(title) {
        var expected = compareText(title);
        return items().find(function (item) {
          return compareText((item.querySelector('.js-catalog-filter-item-title') || {}).textContent) === expected;
        }) || null;
      }
    
      function checkboxes(item) {
        return item ? Array.prototype.slice.call(item.querySelectorAll('input.js-catalog-filter-opt-chb')) : [];
      }
    
      function checkboxOptions(item) {
        return checkboxes(item).map(function (input) {
          var label = input.closest('label');
          var title = label && label.querySelector('.t-catalog__filter__title');
          var text = clean(title && title.textContent || input.getAttribute('data-filter-value') || input.value || input.name);
          return {
            value: input.getAttribute('data-filter-value') || input.value || input.name || text,
            text: text,
            input: input,
          };
        }).filter(function (option) {
          return option.text;
        });
      }
    
      function firstNumber(value) {
        var match = clean(value).replace(',', '.').match(/-?\d+(?:\.\d+)?/);
        return match ? Number(match[0]) : null;
      }
    
      function itemParamName(item, recId) {
        var hidden = item && item.querySelector('input.js-catalog-filter-opt[type="hidden"]');
        return hidden && hidden.name ? 'tfc_' + hidden.name + '[' + recId + ']' : '';
      }
    
      function recId() {
        var catalog = visibleCatalog();
        var rec = catalog && catalog.closest('.t-rec[id^="rec"]');
        return rec && rec.id ? rec.id.replace(/^rec/, '') : GENERATOR_REC_ID;
      }
    
      function brandConstraint() {
        return brandByPath[location.pathname.replace(/\/+$/, '')] || '';
      }
    
      function fuelConstraint() {
        var fallback = fuelByPath[location.pathname.replace(/\/+$/, '')] || [];
        if (!fallback.length) return [];
        var optionValues = checkboxOptions(itemByTitle('Тип топлива')).map(function (option) {
          return option.value;
        }).filter(Boolean);
        return optionValues.length ? optionValues : fallback;
      }
    
      function priceDefaults() {
        var item = itemByTitle('Цена');
        var minInput = item && item.querySelector('.js-catalog-filter-pricemin');
        var maxInput = item && item.querySelector('.js-catalog-filter-pricemax');
        return {
          min: firstNumber(minInput && (minInput.getAttribute('data-min-val') || minInput.value)) || '',
          max: firstNumber(maxInput && (maxInput.getAttribute('data-max-val') || maxInput.value)) || '',
        };
      }
    
      function rangeDefaults(title) {
        var numbers = checkboxOptions(itemByTitle(title)).map(function (option) {
          return firstNumber(option.text);
        }).filter(function (number) {
          return number !== null && isFinite(number);
        });
        if (!numbers.length) return { min: '', max: '' };
        return { min: Math.min.apply(null, numbers), max: Math.max.apply(null, numbers) };
      }
    
      function initialValue(field) {
        if (field.type === 'range') return { min: '', max: '' };
        if (field.type === 'price') return { min: '', max: '' };
        var checked = checkboxOptions(itemByTitle(field.title)).find(function (option) {
          return option.input.checked;
        });
        return checked ? checked.value : '';
      }
    
      function collectModel() {
        var fields = primaryFields.concat(advancedFields).map(function (field) {
          var item = itemByTitle(field.title);
          var options = checkboxOptions(item);
          if (!item && field.type !== 'price') return null;
          return {
            label: field.label,
            title: field.title,
            type: field.type || 'select',
            options: options.map(function (option) {
              return { value: option.value, text: option.text };
            }),
            defaults: field.type === 'price' ? priceDefaults() : field.type === 'range' ? rangeDefaults(field.title) : null,
            initial: initialValue(field),
          };
        }).filter(Boolean);
    
        return {
          primary: fields.slice(0, primaryFields.length),
          advanced: fields.slice(primaryFields.length),
          brand: brandConstraint(),
          sig: fields.map(function (field) {
            return field.title + ':' + field.options.map(function (option) { return option.value; }).join('|');
          }).join('::'),
        };
      }
    
      function dispatchNative(input) {
        if (!input) return;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    
      function modelSignature(model) {
        return JSON.stringify({
          path: location.pathname,
          search: location.search,
          brand: model.brand || '',
          sig: model.sig || '',
          initial: model.primary.concat(model.advanced).map(function (field) {
            return [field.title, field.type, field.initial, field.defaults];
          }),
        });
      }
    
      function setSingleCheckbox(title, value) {
        checkboxOptions(itemByTitle(title)).forEach(function (option) {
          var shouldCheck = !!value && option.value === value;
          if (option.input.checked !== shouldCheck) option.input.click();
        });
      }
    
      function setRangeCheckboxes(title, min, max) {
        var hasRange = min !== '' || max !== '';
        var minNumber = min === '' ? -Infinity : Number(min);
        var maxNumber = max === '' ? Infinity : Number(max);
        checkboxOptions(itemByTitle(title)).forEach(function (option) {
          var number = firstNumber(option.text);
          var shouldCheck = hasRange && number !== null && number >= minNumber && number <= maxNumber;
          if (option.input.checked !== shouldCheck) option.input.click();
        });
      }
    
      function setPrice(min, max) {
        var item = itemByTitle('Цена');
        if (!item) return;
        var defaults = priceDefaults();
        var values = {
          min: min === '' ? defaults.min : Number(min),
          max: max === '' ? defaults.max : Number(max),
        };
        [
          ['min', '.js-catalog-filter-pricemin', '.t-catalog__filter__range_min'],
          ['max', '.js-catalog-filter-pricemax', '.t-catalog__filter__range_max'],
        ].forEach(function (config) {
          var role = config[0];
          var textInput = item.querySelector(config[1]);
          var rangeInput = item.querySelector(config[2]);
          if (textInput) {
            textInput.value = String(values[role]).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            dispatchNative(textInput);
          }
          if (rangeInput) {
            rangeInput.value = values[role];
            dispatchNative(rangeInput);
          }
        });
      }
    
      function clearNative() {
        items().forEach(function (item) {
          checkboxes(item).forEach(function (input) {
            if (input.checked) input.click();
          });
        });
        setPrice('', '');
      }
    
      function normalizeNumber(value) {
        var number = firstNumber(value);
        return number === null ? '' : String(number);
      }
    
      function appendRangeParams(params, recId, title, min, max) {
        var item = itemByTitle(title);
        var paramName = itemParamName(item, recId);
        if (!paramName || (min === '' && max === '')) return;
        var minNumber = min === '' ? -Infinity : Number(min);
        var maxNumber = max === '' ? Infinity : Number(max);
        checkboxOptions(item).forEach(function (option) {
          var number = firstNumber(option.text);
          if (number !== null && number >= minNumber && number <= maxNumber) params.append(paramName, option.value);
        });
      }
    
      function buildSearch(values, recId) {
        var search = new URLSearchParams();
        var hasExplicitFuel = false;
        primaryFields.concat(advancedFields).forEach(function (field) {
          var value = values[field.title];
          if (!value) return;
          if (field.type === 'range') {
            appendRangeParams(search, recId, field.title, value.min || '', value.max || '');
            return;
          }
          if (field.type === 'price') {
            var defaults = priceDefaults();
            var minValue = normalizeNumber(value.min);
            var maxValue = normalizeNumber(value.max);
            if (minValue && Number(minValue) !== Number(defaults.min)) search.set('tfc_price:min[' + recId + ']', minValue);
            if (maxValue && Number(maxValue) !== Number(defaults.max)) search.set('tfc_price:max[' + recId + ']', maxValue);
            return;
          }
          if (value) {
            if (field.title === 'Тип топлива') hasExplicitFuel = true;
            var paramName = itemParamName(itemByTitle(field.title), recId);
            if (paramName) search.append(paramName, value);
          }
        });
        if (!hasExplicitFuel) {
          var fuelValues = fuelConstraint();
          var fuelParamName = fuelValues.length ? itemParamName(itemByTitle('Тип топлива'), recId) : '';
          if (fuelParamName) search.set(fuelParamName, fuelValues.join(':::'));
        }
        if (Array.from(search).length) search.set('tfc_div', ':::');
        return search.toString() ? '?' + search.toString() : '';
      }
    
      function normalizeSearch(search) {
        return search || '';
      }
    
      function isGeneratorCatalogPage() {
        return location.pathname.replace(/\/+$/, '') === '/catalog/generators';
      }
    
      function applyValues(values) {
        if (brandConstraint() && values['Бренд']) setSingleCheckbox('Бренд', values['Бренд']);
        primaryFields.concat(advancedFields).forEach(function (field) {
          var value = values[field.title];
          if (field.type === 'range') setRangeCheckboxes(field.title, value && value.min || '', value && value.max || '');
          else if (field.type === 'price') setPrice(value && value.min || '', value && value.max || '');
          else setSingleCheckbox(field.title, value || '');
        });
      }
    
      function loadScript(url) {
        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          script.src = url;
          script.async = true;
          script.onload = resolve;
          script.onerror = function () { reject(new Error('script load failed: ' + url)); };
          document.head.appendChild(script);
        });
      }
    
      function loadPreact() {
        if (window.preact && window.preactHooks) return Promise.resolve(window.preact);
        if (apiPromise) return apiPromise;
        apiPromise = loadScript(PREACT_URL)
          .then(function () { return loadScript(HOOKS_URL); })
          .then(function () {
            if (!window.preact || !window.preactHooks) throw new Error('preact globals missing');
            return window.preact;
          });
        return apiPromise;
      }
    
      function createFilterComponent(api) {
        var h = api.h;
        var hooks = window.preactHooks;
    
        function initialState(model) {
          var state = {};
          model.primary.concat(model.advanced).forEach(function (field) {
            state[field.title] = field.initial;
          });
          if (model.brand && !state['Бренд']) {
            var brandField = model.primary.concat(model.advanced).find(function (field) { return field.title === 'Бренд'; });
            var brandOption = brandField && brandField.options.find(function (option) {
              return compareText(option.text) === compareText(model.brand) || compareText(option.value) === compareText(model.brand);
            });
            if (brandOption) state['Бренд'] = brandOption.value;
          }
          return state;
        }
    
        return function FilterPanel(props) {
          var expandedState = hooks.useState(false);
          var expanded = expandedState[0];
          var setExpanded = expandedState[1];
          var valuesState = hooks.useState(function () { return initialState(props.model); });
          var values = valuesState[0];
          var setValues = valuesState[1];
          var latestValuesRef = hooks.useRef(values);
          latestValuesRef.current = values;
    
          hooks.useEffect(function () {
            applyValues(values);
          }, []);
    
          function update(title, value) {
            setValues(function (current) {
              var next = {};
              Object.keys(current).forEach(function (key) { next[key] = current[key]; });
              next[title] = value;
              latestValuesRef.current = next;
              return next;
            });
          }
    
          function renderField(field) {
            if (field.type === 'range' || field.type === 'price') {
              var rangeValue = values[field.title] || { min: '', max: '' };
              var defaults = field.defaults || {};
              return h('label', { class: 'gv-pf__field', key: field.title },
                h('span', { class: 'gv-pf__label' }, field.label),
                h('span', { class: 'gv-pf__range' },
                  h('input', {
                    class: 'gv-pf__control',
                    inputMode: 'decimal',
                    placeholder: defaults.min ? 'от ' + defaults.min : 'от',
                    value: rangeValue.min || '',
                    onInput: function (event) { update(field.title, { min: event.currentTarget.value, max: rangeValue.max || '' }); },
                  }),
                  h('input', {
                    class: 'gv-pf__control',
                    inputMode: 'decimal',
                    placeholder: defaults.max ? 'до ' + defaults.max : 'до',
                    value: rangeValue.max || '',
                    onInput: function (event) { update(field.title, { min: rangeValue.min || '', max: event.currentTarget.value }); },
                  })
                )
              );
            }
    
            return h('label', { class: 'gv-pf__field', key: field.title },
              h('span', { class: 'gv-pf__label' }, field.label),
              h('select', {
                class: 'gv-pf__control gv-pf__select',
                'data-filter-title': field.title,
                value: values[field.title] || '',
                onChange: function (event) { update(field.title, event.currentTarget.value); },
              },
              h('option', { value: '' }, 'Не важно'),
              field.options.map(function (option) {
                return h('option', { value: option.value, key: option.value }, option.text);
              }))
            );
          }
    
          function submit() {
            var latestValues = latestValuesRef.current || values;
            applyValues(latestValues);
            setTimeout(function () {
              if (!isGeneratorCatalogPage()) {
                location.href = '/catalog/generators' + normalizeSearch(buildSearch(latestValues, GENERATOR_REC_ID));
                return;
              }
              location.href = location.pathname + normalizeSearch(buildSearch(latestValues, recId()));
            }, 350);
          }
    
          function reset() {
            clearNative();
            var next = initialState(props.model);
            latestValuesRef.current = next;
            setValues(next);
          }
    
          return h('section', {
            class: 'gv-pf gv-pf_preact ' + (expanded ? 'gv-pf_expanded' : ''),
            'data-gv-advanced-open': expanded ? '1' : '0',
          },
          h('div', { class: 'gv-pf__head' }, 'Подобрать генератор'),
          h('div', { class: 'gv-pf__body' },
            h('div', { class: 'gv-pf__grid' }, props.model.primary.map(renderField)),
            h('div', { class: 'gv-pf__grid gv-pf__advanced' }, props.model.advanced.map(renderField)),
            h('div', { class: 'gv-pf__actions' },
              h('button', {
                class: 'gv-pf__more',
                type: 'button',
                onClick: function () { setExpanded(!expanded); },
              }, expanded ? 'Скрыть расширенный поиск ' : 'Расширенный поиск ', h('span', { class: 'gv-pf__more-mark' }, expanded ? '⌃' : '⌄')),
              h('div', { class: 'gv-pf__buttons' },
                h('button', { class: 'gv-pf__btn gv-pf__btn_reset', type: 'button', onClick: reset }, 'Сбросить'),
                h('button', { class: 'gv-pf__btn gv-pf__btn_submit', type: 'button', onClick: submit }, 'Подобрать')
              )
            )
          ));
        };
      }
    
      function mount() {
        if (location.pathname.indexOf('/tproduct/') !== -1) return;
        var catalog = visibleCatalog();
        if (!catalog || !filterRoot()) return;
        var model = collectModel();
        if (!model.primary.length) return;
        var signature = modelSignature(model);
        var hasMountedHost = mountedHost && document.documentElement.contains(mountedHost);
        if (hasMountedHost && mountedHost.nextElementSibling !== catalog && catalog.parentNode) {
          catalog.parentNode.insertBefore(mountedHost, catalog);
        }
        if (hasMountedHost && mountedSignature === signature) {
          document.body.classList.add('gv-pf-ready');
          document.documentElement.classList.add('gv-preact-filter-ready');
          return;
        }
        if (hasMountedHost && mountedHost.contains(document.activeElement)) {
          setTimeout(mount, 1000);
          return;
        }
    
        loadPreact().then(function (api) {
          if (mountedHost && document.documentElement.contains(mountedHost) && mountedSignature === signature) return;
          if (mountedHost && mountedHost.contains(document.activeElement)) {
            setTimeout(mount, 1000);
            return;
          }
          if (!mountedHost || !document.documentElement.contains(mountedHost)) {
            mountedHost = document.createElement('div');
            mountedHost.className = 'gv-pf-preact-root';
            catalog.parentNode.insertBefore(mountedHost, catalog);
          } else if (mountedHost.nextElementSibling !== catalog && catalog.parentNode) {
            catalog.parentNode.insertBefore(mountedHost, catalog);
          }
    
          mountedRoot = mountedHost;
          api.render(api.h(createFilterComponent(api), { model: model }), mountedRoot);
          mountedSignature = signature;
          document.body.classList.add('gv-pf-ready');
          document.documentElement.classList.add('gv-preact-filter-ready');
        }).catch(function (error) {
          console.warn('[genvolt] preact filter failed', error);
          document.documentElement.classList.add('gv-preact-filter-failed');
        });
      }
    
      function schedule() {
        setTimeout(mount, 250);
        setTimeout(mount, 900);
        setTimeout(mount, 1800);
      }
    
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule);
      else schedule();
      window.addEventListener('load', schedule);
      window.addEventListener('resize', schedule);
    
      if (!window.gvPreactFilterObserver) {
        window.gvPreactFilterObserver = new MutationObserver(function () {
          if (!mountedRoot) schedule();
        });
        window.gvPreactFilterObserver.observe(document.documentElement, { childList: true, subtree: true });
      }
    })();
  })();
})();