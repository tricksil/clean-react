import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import faker from 'faker';

import Input from './input';
import Context from '@/presentation/contexts/form/form-content';

const makeSut = (field: string): RenderResult => {
  return render(
    <Context.Provider value={{ state: {} }}>
      <Input name={field} />
    </Context.Provider>
  );
};

describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const field = faker.database.column();
    const sut = makeSut(field);
    const input = sut.getByTestId(field) as HTMLInputElement;
    expect(input.readOnly).toBe(true);
  });

  test('Should remove readOnly on focus', () => {
    const field = faker.database.column();
    const sut = makeSut(field);
    const input = sut.getByTestId(field) as HTMLInputElement;
    fireEvent.focus(input);
    expect(input.readOnly).toBe(false);
  });
});
