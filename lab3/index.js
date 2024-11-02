const productsDiv = document.getElementById("products");
const quickViewWindow = document.getElementById("quickViewWindow");
const closeQViewBtn = document.getElementById("closeQViewWindow")

document.addEventListener("DOMContentLoaded",()=>{

    shirts.forEach(shirt =>{
        if(!shirt.colors) return;

        const colors = Object.keys(shirt.colors);
        
        const productWrapper = document.createElement("div");
        productWrapper.classList.add("productWrapper");
        
        const productImgWrapper = document.createElement("div");
        productImgWrapper.classList.add("productImgWrapper");
        
        const productImg = document.createElement("img");
        productImg.src = colors.length? shirt.colors[colors[0]].front : shirt.default.front;
    
        const productName = document.createElement("h1");
        productName.textContent = shirt.name? shirt.name: "Default";
    
        const productColors = document.createElement("p");
        productColors.textContent = `Available in ${colors.length? colors.length: "0"} colors`;
    
        const btnPanel = document.createElement("div");
        btnPanel.classList.add("btnPanel")
    
        const quickViewBtn =  document.createElement("button");
        quickViewBtn.textContent="Quick View";
        quickViewBtn.addEventListener("click", ()=>{ quickView(shirt, colors[0])});

        const seePageBtn =  document.createElement("button");
        seePageBtn.textContent="See Page";
        seePageBtn.addEventListener("click", ()=>{
            localStorage.setItem("shirt", JSON.stringify(shirt)) ;
            window.location.href="./details.html"
        })
    
        btnPanel.append(quickViewBtn);
        btnPanel.append(seePageBtn);
    
        productImgWrapper.append(productImg);
        productWrapper.append(productImgWrapper);
        productWrapper.append(productName);
        productWrapper.append(productColors);
        productWrapper.append(btnPanel);
    
        productsDiv.append(productWrapper)
    })
    
})

function quickView(shirt, colorKey){
    quickViewWindow.style.display ="flex";
    const quickViewImage = document.getElementById("quickViewImg");
    const name = document.getElementById("nameTxt");
    const descr = document.getElementById("descrTxt");
    const price = document.getElementById("priceTxt");
    name.textContent = shirt.name? shirt.name: "Default";
    descr.textContent = shirt.description? shirt.description: " ";
    price.textContent = shirt.price? shirt.price: " ";
    quickViewImage.src = colorKey? shirt.colors[colorKey].front : shirt.default.front;
}
closeQViewBtn.addEventListener("click", ()=>{ 
    quickViewWindow.style.display ="none";
})
