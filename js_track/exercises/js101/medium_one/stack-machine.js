function minilang(commands) {
  let splitCommands = commands.toLowerCase().split(' ');
  let register = 0;
  let stack = [];

  splitCommands.forEach(el => {
    if (Number(el)) {
      register = Number(el);
    } else if (el === "push") {
      stack.push(register);
    } else if (el === "add") {
      register = register + stack.pop();
    } else if (el === "sub") {
      register = register - stack.pop();
    } else if (el === "mult") {
      let value = register * stack.pop();
      register = value;
    } else if (el === "div") {
      let value = register / stack.pop();
      register = value.toFixed(0);
    } else if (el === "mod") {
      let value = register % stack.pop();
      register = value.toFixed(0);
    } else if (el === "pop") {
      register = stack.pop();
    } else if (el === "print") {
      console.log(register);
    }

    debugger;
  })
}




minilang('PRINT');
minilang('5 PUSH 3 MULT PRINT');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
minilang('4 PUSH PUSH 7 MOD MULT PRINT');
minilang('-3 PUSH 5 SUB PRINT');
minilang('6 PUSH');
