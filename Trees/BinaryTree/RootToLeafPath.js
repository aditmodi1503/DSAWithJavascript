//Problem 20

let path = [];
const RootToLeafPath = root => {
    if(!root) return;

    path.push(root.data);
    if(!root.left && !root.right){
        for(let i=0; i < path.length; i++){
            console.log(path[i])
        }
        // path = [];
        console.log('----');
    }

    RootToLeafPath(root.left);
    path.pop();
    RootToLeafPath(root.right);
    path.pop();
}