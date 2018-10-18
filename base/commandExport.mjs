import botinfo from '../commands/botinfo.mjs';
import eval from '../commands/eval.mjs';
import help from '../commands/help.mjs';
import profile from '../commands/profile.mjs';
import character from '../commands/character.mjs';
import prefix from '../commands/prefix.mjs';

let commands = {
  "botinfo": botinfo,
  "eval": eval,
  "help": help,
  "profile": profile,
  "character": character,
  "prefix": prefix,
};

export default commands;
