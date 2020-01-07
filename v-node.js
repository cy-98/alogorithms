
class VNode {
    constructor(tagName, props, children){
        this.tagName = tagName
        this.props = props
        this.children = []
    }
}

const h = ( tagName, props, children )=>{
    let vnode  = new VNode(tagName,props,)

    if( children ){
        for( let i = 0, length = children.length; i < length; i ++ ) {
            this.children.push ( h( children ) )
        }
    }

    return vnode
}

const render = (vnode)=>{

    let tagName  = vnode.tagName 
    let props    = vnode.props
    let children = vnode.children
    
    return domNode()

    function domNode( tageName, props, children ) {
        let node = document.createElement(tagName)

        if(props) {
            props.map(prop => {
                node.setAttribute(prop,this.prop[prop])
            })
        }
        
        if(children) {
            this.children.map( subTag => {
                dom.appendChild( 
                    subTag instanceof VNode ?  render(subTag) : subTag
                )
            })
        }

        return node
    }
}

// function compile (template) {
//     if( typeof template !== 'string' ) {
//         console.error('template must be type of string !')
//     }
// }
