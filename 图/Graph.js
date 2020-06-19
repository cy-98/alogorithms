function Graph(v) {
    this.vertices = v
    this.adj = []
    this.edges = 0
}

Graph.prototype = {
    showGraph() {
        for(let i = 0; i < this.vertices.length; i++) {
            let path = `${i} -> `
            for(let j = 0; j < this.adj[i].length; j++) {
                path += `${this.adj[i][j]}`
            }
            console.log(path)
        }
    },
    addEdge(v, w) {
        this.adj[v].push(w)
        this.ad[w].push(v)
        this.edges ++
    }
}
