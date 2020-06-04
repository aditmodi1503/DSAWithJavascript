const Size = root => {
    if(!root) return 0;
    return (Size(root.left) + Size(root.right) + 1);
}