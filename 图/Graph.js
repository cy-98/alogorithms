function Graph(v) {
    this.vertices = v
    this.adj = []
    this.edges = 0
    this.marked = []
    for(let i = 0; i < this.vertices; i++) {
        this.adj[i] = []
        this.marked[i] = false
    }
}

Graph.prototype = {
    showGraph() {
        for(let i = 0; i < this.vertices; i++) {
            let path = `${i} -> `
            for(let j = 0; j < this.adj[i].length; j++) {
                path += `${this.adj[i][j]}`
            }
            console.log(path)
        }
    },
    addEdge(v, w) {
        this.adj[v].push(w)
        this.adj[w].push(v)
        this.edges ++
    },
    // 深度优先搜索
    dfs(v) {
        this.marked[v] = true
        console.log(`visited ${v}`)
        for(let i = 0; i < this.adj[v].length; i++) {
            const w = this.adj[v][i]
            if(!this.marked[w]) { 
                this.dfs(this.adj[v][i])
            }
        }
    },
    // 宽度优先搜索
    bfs(v) {
        let queue = []
        queue.push(v)
        this.marked[v] = true
        while(queue.length) {
            const v = queue.shift()
            for(let i = 0; i < this.adj[v].length; i++) {
                const w = this.adj[v][i]
                if(!this.marked[w]) {
                    this.marked[w] = true
                    queue.push(w)
                    console.log(w)
                }
            }
        }
    }
}

const g = new Graph(5)
g.addEdge(0,1)
g.addEdge(0,2)
g.addEdge(1,3)
g.addEdge(2,4)
g.showGraph()
g.bfs(0)
