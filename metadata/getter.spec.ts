import {GetSet} from './getter';


describe('GetSet', () => {

  // has
  describe('has', () => {
    const obj = {field1: 'value'};

    const arr = [0, 1, 2];
    it('has несуществующего поля объекта должен возвратить false', () => {
      const field = 'missingField';
      expect(GetSet.has(obj, field)).toBeFalsy();

    });

    it('has существующего поля объекта должен возвратить true', () => {
      const field = 'field1';
      expect(GetSet.has(obj, field)).toBeTruthy();

    });

    it('has несуществующего индекса массива должен возвратить false', () => {
      const index = 11;
      expect(GetSet.has(arr, index)).toBeFalsy();

    });

    it('has существующего индекса массива должен возвратить true', () => {
      const index = 1;
      expect(GetSet.has(arr, index)).toBeTruthy();

    });


  });
// hasIn
  describe('hasIn', () => {
    const obj = {
      field1: 'value',
      field2: {
        fieldObject: 'value',
        fieldArray: [1, 2, 3]
      },
      fields: ['value1', 'value2']
    };


    it('hasIn несуществующего поля объекта должен возвратить false', () => {
      const path = ['field2', 'missingField'];
      expect(GetSet.hasIn(obj, path)).toBeFalsy();

    });

    it('hasIn существующего поля объекта должен возвратить true', () => {
      const path = ['field2', 'fieldObject'];
      expect(GetSet.hasIn(obj, path)).toBeTruthy();

    });

    it('hasIn несуществующего индекса массива должен возвратить false', () => {
      const path = ['field2', 'fieldArray', 11];
      expect(GetSet.hasIn(obj, path)).toBeFalsy();

    });

    it('hasIn существующего индекса массива должен возвратить true', () => {
      const path = ['field2', 'fieldArray', 1];
      expect(GetSet.hasIn(obj, path)).toBeTruthy();

    });


  });
  // get
  describe('get', () => {

    const obj = {
      field1: 'value',
      field2: {
        fieldObject: 'value',
        fieldArray: [1, 2, 3]
      },
      fields: ['value1', 'value2']
    };

    const arr = [0, 1, 2];

    it('get несуществующего поля объекта должен возвратить undefined', () => {
      const field = 'missingField';
      expect(GetSet.get(obj, field)).toBeUndefined();

    });

    it('get несуществующего индекса массива должен возвратить undefined', () => {
      const field = 10;
      expect(GetSet.get(arr, field)).toBeUndefined();

    });

    it('get существующего поля объекта должен возвратить значение поля', () => {
      const field = 'field1';
      expect(GetSet.get(obj, field)).toBe(obj[field]);
    });

    it('get существующего индекса массива должен возвратить значение элемента', () => {
      const field = 1;
      expect(GetSet.get(arr, field)).toBe(arr[field]);

    });
  });

  // getIn
  describe('getIn', () => {

    const obj = {
      field1: 'value',
      field2: {
        fieldObject: 'value',
        fieldArray: [1, 2, 3]
      },
      fields: ['value1', 'value2']
    };

    const arr = [0, 1, 2];

    it('getIn несуществующего поля объекта должен вызвать ошибку', () => {
      const path = ['field1', 'missingField'];
      try {
        GetSet.getIn(obj, path);
      } catch (e) {
        expect(e).toBeDefined();
      }

    });

    it('getIn несуществующего индекса массива должен возвратить ошибку', () => {
      const path = ['field2', 'fieldArray', 10];

      try {
        GetSet.getIn(arr, path);
      } catch (e) {
        expect(e).toBeDefined();
      }

    });

    it('getIn существующего поля объекта должен возвратить значение поля', () => {
      const path = ['field2', 'fieldObject'];
      const result = obj[path[0]][path[1]];
      expect(GetSet.getIn(obj, path)).toBe(result);
    });

    it('getIn существующего индекса массива должен возвратить значение элемента', () => {
      const path = ['field2', 'fieldArray', 1];
      const result = obj[path[0]][path[1]][path[2]];
      expect(GetSet.getIn(obj, path)).toBe(result);

    });


  });
  // set
  describe('set', () => {

    const obj = {field1: 'value'};

    const arr = [0, 1, 2];

    it('set несуществующего поля объекта должен вызвать ошибку', () => {
      const field = 'field11';
      const value = 'value';
      try {
        GetSet.set(obj, field, value);
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    it('set несуществующего индекса массива должен возвратить ошибку', () => {
      const field = 10;
      const value = 'value';


      try {
        GetSet.set(arr, field, value);
      } catch (e) {
        expect(e).toBeDefined();
      }

    });

    it('set существующего поля объекта должен установить значение поля', () => {
      const field = 'field2';
      const value = 'value-new';

      const result = GetSet.set(obj, field, value);

      expect(GetSet.get(result, field)).toBe(value);
    });

    it('set существующего индекса массива должен установить значение элемента', () => {
      const index = 0;
      const value = 'value-new';
      const result = GetSet.set(arr, index, value);
      expect(GetSet.get(result, index)).toBe(value);

    });


  });

  // setIn
  describe('setIn', () => {

    const obj = {
      field1: 'value',
      field2: {
        fieldObject: 'value',
        fieldArray: [1, 2, 3]
      },
      fields: ['value1', 'value2']
    };

    it('setIn существующего поля объекта должен установить значение поля', () => {
      const path = ['field2', 'fieldObject'];
      const value = 'value-new';
      const result = GetSet.setIn(obj, path, value);
      expect(GetSet.getIn(result, path)).toBe(value);

    });

    it('setIn существующего индекса массива должен установить элемента', () => {
      const path = ['field2', 'fieldArray', 1];
      const value = 'value-new';
      const result = GetSet.setIn(obj, path, value);
      expect(GetSet.getIn(result, path)).toBe(value);

    });

    it('setIn несуществующего поля объекта должен возвратить ошибку', () => {
      const path = ['field2', 'fieldMissing'];
      const value = 'value-new';

      try {
        GetSet.setIn(obj, path, value);
      } catch (e) {
        expect(e).toBeDefined();
      }

    });

    it('setIn несуществующего индекса массива должен возвратить ошибку', () => {
      const path = ['field2', 'fieldArray', 11];
      const value = 'value-new';

      try {
        GetSet.setIn(obj, path, value);
      } catch (e) {
        expect(e).toBeDefined();
      }

    });
  });

  // remove
  describe('remove', () => {

    const obj = {field1: 'value'};

    const arr = [0, 1, 2];
    it('remove существующего поля объекта должен удалить поле', () => {
      const field = 'field1';
      const result = GetSet.remove(obj, field);

      expect(GetSet.has(result, field)).toBeFalsy();
    });
    it('remove НЕ существующего поля объекта должен оставить объект без изменения', () => {
      const field = 'fieldMissing';
      const result = GetSet.remove(obj, field);

      expect(JSON.stringify(result)).toBe(JSON.stringify(obj));
    });

    it('remove существующего индекса массива должен удалить элемент', () => {
      const index = 1;
      const result = GetSet.remove(arr, index);

      expect(result.length).toBe(arr.length - 1);
    });
    it('remove НЕ индекса массива должен оставить массив без изменения', () => {
      const index = 11;
      const result = GetSet.remove(arr, index);

      expect(result.length).toBe(arr.length);
    });
  });

  // removeIn
  fdescribe('removeIn', () => {

    const obj = {
      field1: 'value',
      field2: {
        fieldObject: 'value',
        fieldArray: [1, 2, {field: {field: 'value'}}]
      },
      fields: ['value1', 'value2']
    };
    it('removeIn существующего поля объекта должен удалить поле', () => {
      const path = ['field2', 'fieldObject'];
      const result = GetSet.removeIn(obj, path);

      expect(GetSet.hasIn(result, path)).toBeFalsy();
    });
    it('removeIn НЕ существующего поля объекта должен оставить объект без изменения', () => {
      const path = ['field2', 'fieldMissing'];
      const result = GetSet.removeIn(obj, path);

      expect(JSON.stringify(result)).toBe(JSON.stringify(obj));
    });

    it('removeIn существующего индекса массива должен удалить элемент массива', () => {
      const path = ['field2', 'fieldArray', 1];
      const result = GetSet.removeIn(obj, path);

      expect(GetSet.getIn(result, path)).not.toBe(GetSet.getIn(obj, path));
    });
    it('removeIn НЕ существующего индекса массива должен оставить массив без изменения', () => {
      const path = ['field2', 'fieldArray', 11];
      const result = GetSet.removeIn(obj, path);

      expect(JSON.stringify(result)).toBe(JSON.stringify(obj));
    });

    it('removeIn контрольный в голову', () => {
      const path = ['field2', 'fieldArray', 2, 'field', 'field'];
      const result = GetSet.removeIn(obj, path);

      expect(GetSet.hasIn(result, path)).toBeFalsy();
    });
  });
});


