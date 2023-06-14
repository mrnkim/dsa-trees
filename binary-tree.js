"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    let toVisitStack = [this];

    let depth = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.shift();

      depth++;

      if (current.left === null || current.right === null) {
        console.log("current", current);
        return depth;
      }

      toVisitStack.push(current.left);
      toVisitStack.push(current.right);
    }

    return depth;
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    let toVisitStack = [this]; //6

    let maxDepth = 0;
    let depth = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop(); //1

      depth++; //5
      maxDepth = depth > maxDepth ? depth : maxDepth; //4

      if (current.left) {
        toVisitStack.push(current.left); //[5(L), 2]
      }
      if (current.right) {
        toVisitStack.push(current.right); //[5(L), 2, 1]
      }
    }
    return maxDepth;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {}
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (!this.root) return 0;
    return this.root.minDepthToIncompleteNode();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {}

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {}

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {}

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
