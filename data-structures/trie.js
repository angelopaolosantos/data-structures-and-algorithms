class TrieNode {
  constructor(character, isCompletedWord = false) {
    this.character = character
    this.isCompletedWord = isCompletedWord
    this.children = new Map()
  }

  getChild(character) {
    this.children.get(character)
  }

  addChild(character, isCompletedWord = false) {
    if (!this.children.has(character)) {
      this.children.set(character, new TrieNode(character, isCompletedWord))
    }

    const childNode = this.children.get(character)

    childNode.isCompletedWord = childNode.isCompletedWord || isCompletedWord

    return childNode
  }

  removeChild(character) {
    const childNode = this.getChild(character);

    // Delete childNode only if:
    // - childNode has NO children,
    // - childNode.isCompleteWord === false.
    if (
      childNode
      && !childNode.isCompleteWord
      && !childNode.hasChildren()
    ) {
      this.children.delete(character);
    }

    return this;
  }

  /**
   * @param {string} character
   * @return {boolean}
   */
  hasChild(character) {
    return this.children.has(character);
  }

  /**
   * Check whether current TrieNode has children or not.
   * @return {boolean}
   */
  hasChildren() {
    return this.children.getKeys().length !== 0;
  }

  /**
   * @return {string[]}
   */
  suggestChildren() {
    return [...this.children.getKeys()];
  }

  /**
   * @return {string}
   */
  toString() {
    let childrenAsString = this.suggestChildren().toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
    const isCompleteString = this.isCompleteWord ? '*' : '';

    return `${this.character}${isCompleteString}${childrenAsString}`;
  }
}