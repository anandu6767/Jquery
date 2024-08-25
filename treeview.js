class TreeView {
    constructor(containerId) {
        this.container = $(containerId);
        this.nodes = [];
    }

    addNode(parent, text, children = []) {
        const node = $('<li>').text(text);

        if (children.length > 0) {
            const childList = $('<ul>').appendTo(node);
            children.forEach(child => {
                this.addNode(childList, child);
            });
        }

        if (parent) {
            parent.append(node);
        } else {
            this.container.append(node);
        }

        this.nodes.push(node);
        return node;
    }
}

// Example usage
const treeView = new TreeView("#tree-view");
treeView.addNode(null, "Root Node");
treeView.addNode(treeView.nodes[0], "Child Node 1");
treeView.addNode(treeView.nodes[0], "Child Node 2");
treeView.addNode(treeView.nodes[1], "Grandchild Node");