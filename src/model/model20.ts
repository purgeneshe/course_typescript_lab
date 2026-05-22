export function Serializable<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extends Base {
    serialize(): string {
      return JSON.stringify(this);
    }
  };
}

export function Validatable<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extends Base {
    validate(): boolean {
      return true;
    }
  };
}

export class FormData {
  fields: any = {};
}

// Применяем обе примеси: сначала Validatable, затем Serializable
export const EnhancedFormData = Serializable(Validatable(FormData));