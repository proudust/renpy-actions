export function wait(milliseconds: number): Promise<string> {
  return new Promise<string>(resolve => {
    if (isNaN(milliseconds)) {
      throw new Error('milliseconds not a number');
    }

    setTimeout(() => resolve('done!'), milliseconds);
  });
}
