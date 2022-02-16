AFRAME.registerComponent("comics",{
    init:function(){
        this.comicContainer = this.el;
        this.createCards();
    },
    createCards:function(){
        const comicFronts = [
            {
                id: "hulk",
                title: "Hulk",
                url:"./Images/Hulk.jpg",
            },
            {
                id: "spider-man",
                title: "Spider Man",
                url:"./Images/SpiderMan.jpg",
            },
            {
                id: "wolverine",
                title: "Wolverine",
                url:"./Images/Wolverine.jpg",
            },
            {
                id: "xMen",
                title: "The X-Men",
                url:"./Images/XMen.jpg",
            },
        ];
        let previosXPosition = -60;

        for(var item of comicFronts){
            const posX = previosXPosition + 20;
            const posY = 10;
            const posZ = -40;
            const position = {x:posX,y:posY,z:posZ};
            previosXPosition = posX;

            const borderEl = this.createBorder(position, item.id);
            const comicFront = this.createThumbnail(item);
            borderEl.appendChild(titleEl);
            this.comicContainer.appendChild(borderEl);
        }
    },
    createBorder:function(){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry",{
            primitive: "rectangle",
            width: 8,
            height: 12,
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
          color: "#000000",
          opacity: 1,
        });
        return entityEl;
    },
    createThumbnail:function(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive:"rectangle",
            width:7,
            height:11
        });
        entityEl.setAttribute("material",{src:item.url});
        return entityEl;
    },
})