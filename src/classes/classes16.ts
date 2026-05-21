type ComplexType = { 
	real: number; 
	imag: number;
	sum: (other: ComplexType) => ComplexType
};

export class Complex implements ComplexType {
  real: number;
  imag: number;

  constructor(real: number, imag: number) {
    this.real = real;
    this.imag = imag;
  }

  // Возвращаем новый экземпляр Complex с суммой real и imag
  sum(other: ComplexType): ComplexType {
    return new Complex(this.real + other.real, this.imag + other.imag);
  }
}

