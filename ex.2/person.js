class Person {
  constructor(nome) {
    this.nome = nome;
  }

  toString() {
    return `Person ${this.nome}`;
  }
}

export default Person;