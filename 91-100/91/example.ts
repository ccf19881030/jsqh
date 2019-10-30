// Here's an example of using a conditional in your type definitions
const listNames = (names: string | string[]) => {
  if (typeof names === 'string') {
    return console.log(names);
  }
  names.forEach(name => console.log(name));
}

listNames('Reed'); // Reed
listNames(['Sue', 'Johnny', 'Ben']); // Sue Johnny Ben

console.log('=================');

// This doesn't really work the way you want it to.
// If you remove that undefined and run w/ no params, you get a compile error
const shoutName = (name: string | undefined) => {
  if (name) {
    return console.log(name.toUpperCase());
  }
  return console.log('Wait ... who?');
}
shoutName('Victor'); // VIKTOR
shoutName(undefined); // Wait ... who?

console.log('=================');

// You can just set a param as optional like this
const nameLength = (name?: string) => {
  if (name) {
    return console.log(name.length);
  }
  return console.log('Hey, I need a name.');
}
nameLength('Nathan'); // 6
nameLength(); // Hey, I need a name.

console.log('=================');

// any is the universal escape hatch, but beware! See below.
const stringifyWhatever = (whatever?: any) => {
  if (whatever) {
    return console.log(JSON.stringify(whatever));
  }
  return console.log(JSON.stringify('No Input Given'));
}
stringifyWhatever('Mr. Fantastic'); // "Mr. Fantastic"
stringifyWhatever(['The Invisible Woman', 'The Human Torch', 'The Thing']); // ["The Invisible Woman","The Human Torch","The Thing"]
stringifyWhatever({ name: 'Victor Von Doom', codeName: 'Doctor Doom' }); // { "name":"Victor Von Doom","codeName":"Doctor Doom"}
stringifyWhatever(); // "No Input Given"

console.log('=================');

// This will compile, but you'll get a JS error when you run it.
const divideThese = (x: any, y: any) => console.log(x / y);
divideThese(8, 2); // 4
divideThese(124, 5); // 24.8
divideThese('Hamburger', false); // NaN
