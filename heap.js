class minHeap {
    constructor(data = []) {
        this.data = data;
        this.init(this.data);
    }

    init(data) {
        for (let key = 0; key < data.length; key++) {
            this.insert(data[key]);
        };
    }

    insert(element) {
        let curPosition = this.data.length
        this.data[curPosition] = element
        this.minify(curPosition)
    }

    minify(curPosition) {
        // 堆的上浮
        let parent = this._get_parent(curPosition)
        while (curPosition > 0) {
            if (this.data[parent] < this.data[curPosition]) {
                break
            } else {
                this._swap(curPosition, parent)
                curPosition = parent
                parent = this._get_parent(curPosition)
            }
        }
    }

    remove() {
        if (!this.data.length) return null

        const min = this.data[0]
        this.data[0] = this.data.pop()
        this.minHeapSort()

        return min
    }

    minHeapSort() {
        let curPosition = 0;
        let left = this._get_left_child(curPosition);
        let right = this._get_right_child(curPosition);

        curPosition = this.data[right] &&
            this.data[left] < this.data[right] ?
            right :
            left

        let parent = this._get_parent(curPosition)
        while (curPosition < this.data.length) {
            if (this.data[curPosition] > this.data[parent]) {
                this._swap(curPosition, parent)
                left = this._get_left_child(curPosition)
                right = this._get_right_child(curPosition)


                curPosition = this.data[right] &&
                    this.data[left] < this.data[right] ?
                    right :
                    left
                parent = this._get_parent(curPosition)
            }
        }

    }

    _get_parent(i) {
        return Math.floor((i - 1) / 2)
    }
    _get_right_child(i) {
        return ++i * 2 - 1
    }
    _get_left_child(i) {
        return ++i * 2
    }
    _swap(a, b) {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
    }
}