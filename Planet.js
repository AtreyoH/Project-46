class Planet
{
    constructor(x,y,w,h)
    {
        this.x=x
        this.y=y
        this.width=w
        this.height=h
      //  this.radius=r
        this.s=createSprite(this.x,this.y,this.w,this.h)
        //this.position=pos
    }
    display()
    {
        drawSprite()
 
        //circle(this.x,this.y,this.r)
    }
    image(xyz)
    {
        this.s.addImage("abc",xyz)
    }
    hide()
    {
        this.s.visible=false
    }    
    unHide()
    {
        this.s.visible=true
    }
    scale(abcs)
    {
        this.s.scale=abcs
    }
}