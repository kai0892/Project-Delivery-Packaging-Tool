/* 项目交付打包工具: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 const assets=d._files?.assets||[];required(d.project,'项目名称');if(!assets.length)throw Error('请先选择要交付的文件，或载入示例');const items=tableRows(d),names=assets.map(x=>x.name);const rows=assets.map((f,i)=>[i+1,f.name,f.size??0,items.find(r=>r.file===f.name)?.purpose||'尚未填写用途']);
 const missing=items.filter(r=>!names.includes(r.file)).map(r=>r.file);const text='# '+d.project+' '+d.version+'\n\n客户：'+d.client+'\n\n## 使用说明\n'+d.instructions+'\n\n## 文件说明\n'+items.map(r=>'- '+r.file+'：'+r.purpose+'；验收：'+r.check).join('\n');
 return {metrics:[metric('交付文件',assets.length),metric('未选中的清单文件',missing.length)],columns:['序号','文件名','字节数','用途'],rows,notes:missing.map(x=>'清单内的文件未上传：'+x),sections:[note('交付说明',text)],view:{kind:'bundle',assets,readme:text},files:[{name:'交付说明.md',text}]};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
