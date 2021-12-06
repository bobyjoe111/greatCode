// SPY FUNCTION


// </Master_Obi> was here...
function spyOn (func) {
  var calls = 0;
  var returns = [];
  var calledWith = [];
  
  var spy = function() {
    var returned = func(arguments);
    calls++;
    returns.push(returned);
    for (var i = 0; i < arguments.length; i++) {calledWith.push(arguments[i]);}
    return returned;
  };
  
  spy.callCount = function() {return calls;};
  spy.returned = function(val) {
      for (var i = 0; i < arguments.length; i++) {
          if (returns.includes(arguments[i])) {
              return true;
          } else {
              return false;
        }
      }
  };
  spy.wasCalledWith = function() {
      for (var i = 0; i < arguments.length; i++) {
          if (calledWith.includes(arguments[i])) {
              return true;
          } else {
              return false;
        }
      }
  };
  return spy;
}











// Jousting function
// </Master_Obi> was here...
function joust(listField, vL, vR) {
  if (vL === 0 && vR === 0) return listField;
  
  var lpos = listField[0].split('').indexOf('>');
  var rpos = listField[1].split('').indexOf('<');
  
  while (lpos < rpos) {
    lpos += vL;
    rpos -= vR;
  }
  
  var lstring = new Array(listField[0].length);
  lstring[lpos] = '>';
  lstring[lpos - 1] = '-'
  lstring[lpos - 2] = '$';
  for (var i = 0; i < lstring.length; i++) {if (lstring[i] === undefined) lstring[i] = ' ';}
  
  var rstring = new Array(listField[1].length);
  rstring[rpos] = '<';
  rstring[rpos + 1] = '-'
  rstring[rpos + 2] = 'P';
  for (var i = 0; i < rstring.length; i++) {if (rstring[i] === undefined) rstring[i] = ' ';}
  
  return [lstring.join(''), rstring.join('')];
}








// Hunger Games Function

// </Master_Obi> was here...

// menu for animals
var eats = {
  'antelope': ["grass"],
  'big-fish': ['little-fish'],
  'bug' : ['leaves'],
  'bear' : ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
  'chicken' : ['bug'],
  'cow' : ['grass'],
  'fox' : ['chicken', 'sheep'],
  'giraffe' : ['leaves'],
  'lion' : ['antelope', 'cow'],
  'panda' : ['leaves'],
  'sheep' : ['grass']
};

function changePlayersForHungerGames(players) {eats = players;}

var whoEatsWho = function(zoo, events) {
  var arr = events || [zoo];
  var letthegamesbegin = (zoo instanceof Array) ? zoo : zoo.split(',');
  for (var i = 0; i < letthegamesbegin.length; i++) {
    var player = letthegamesbegin[i];
    if (player in eats) {
      // left
      if (eats[player].includes(letthegamesbegin[i - 1])) {
        arr.push(player + " eats " + letthegamesbegin[i-1]);
        letthegamesbegin.splice(i - 1, 1);
        return whoEatsWho(letthegamesbegin, arr);
      }
      // right
      if (eats[player].includes(letthegamesbegin[i + 1])) {
        arr.push(player + " eats " + letthegamesbegin[i+1]);
        letthegamesbegin.splice(i + 1, 1);
        return whoEatsWho(letthegamesbegin, arr);
      }
    }
  }
  // adding the survivors
  arr.push(letthegamesbegin.join(','));
  return arr;
}








// Regex Password Validation

// </Master_Obi> was here...
var pass = {};
var bad = '!@#$%^&*()_+`-=<>/?;:"\' []{}|'.split('');
var lower = 'abcdedfghijklmnopqrstuvwxyz'.split('');
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var num = "0123456789".split('');

function inside(word, array) {
  for (var i = 0; i < word.length; i++) {
    if (array.includes(word[i])) {
      return true;
    }
  }
  return false;
}
pass.test = function(pass) {
  return (pass.length >= 6 && inside(pass, lower) && inside(pass, upper) && inside(pass, num) && !(inside(pass, bad))) ? true : false;
};
function validate(password) {
  return pass.test(password);
}








// Warrior function

function Warrior() {
  this.levelNum = 1;
  this.experienceNum = 100;
  this.rankName = 'Pushover';
  this.rankNum = 0;
  this.achievement = [];
  
  this.level = function() {
    this.checkStats();
    return this.levelNum;
  };
  
  this.rank = function() {
    this.checkStats();
    return this.rankName;
  };
  
  this.experience = function() {
    this.checkStats();
    return this.experienceNum;
  };
  
  this.achievements = function() {
    return this.achievement;
  };
  
  this.checkStats = function() {
    
    this.levelNum = (this.experienceNum/100) >> 0;
    if (this.levelNum > 100) {
      this.levelNum = 100;
    }
    if (this.experienceNum > 100*100) {
      this.experienceNum = 100*100;
    }
    

    
    if (this.levelNum > 99) {
      this.rankName = 'Greatest';
      this.rankNum = 10;
    } else if (this.levelNum > 89) {
      this.rankName = "Master";
      this.rankNum = 9;
    } else if (this.levelNum > 79) {
      this.rankName = "Champion";
      this.rankNum = 8;
    } else if (this.levelNum > 69) {
      this.rankName = "Conqueror";
      this.rankNum = 7;
    }  else if (this.levelNum > 59) {
      this.rankName = "Elite";
      this.rankNum = 6;
    }  else if (this.levelNum > 49) {
      this.rankName = "Sage";
      this.rankNum = 5;
    } else if (this.levelNum > 39) {
      this.rankName = "Veteran";
      this.rankNum = 4;
    } else if (this.levelNum > 29) {
      this.rankName = "Warrior";
      this.rankNum = 3;
    } else if (this.levelNum > 19) {
      this.rankName = "Fighter";
      this.rankNum = 2;
    } else if (this.levelNum > 9) {
      this.rankName = "Novice";
      this.rankNum = 1;
    } else {
      this.rankName = 'Pushover';
      this.rankNum = 0;
    }
    
    
  };
  
  this.getRankFromLevel = function(level) {
    var rankName = '';
    var rankNum = 0;
    if (level > 99) {
      rankName = 'Greatest';
      rankNum = 10;
    } else if (level > 89) {
      rankName = "Master";
      rankNum = 9;
    } else if (level > 79) {
      rankName = "Champion";
      rankNum = 8;
    } else if (level > 69) {
      rankName = "Conqueror";
      rankNum = 7;
    }  else if (level > 59) {
      rankName = "Elite";
      rankNum = 6;
    }  else if (level > 49) {
      rankName = "Sage";
      rankNum = 5;
    } else if (level > 39) {
      rankName = "Veteran";
      rankNum = 4;
    } else if (level > 29) {
      rankName = "Warrior";
      rankNum = 3;
    } else if (level > 19) {
      rankName = "Fighter";
      rankNum = 2;
    } else if (level > 9) {
      rankName = "Novice";
      rankNum = 1;
    } else {
      rankName = 'Pushover';
      rankNum = 0;
    }
    return {
      rank: rankName,
      num: rankNum
    };
  };
  
  this.battle = function(level) {
    this.checkStats();
    if (level < 1 || level > 100) {
      return "Invalid level";
    } else if (this.getRankFromLevel(level).num - this.rankNum > 0 && level - this.levelNum >= 5) {
      return "You've been defeated";
    } else if (level === this.levelNum) {
      this.experienceNum += 10;
      return "A good fight";
    } else if (this.levelNum - level === 1) {
      this.experienceNum += 5; 
      return "A good fight";
    } else if (this.levelNum - level >= 2) {
      return "Easy fight";
    } else if (level > this.levelNum) {
      this.experienceNum += 20 * (level-this.levelNum) * (level-this.levelNum);
      
      return "An intense fight";
    }
  };
  
  this.training = function(array) {
    this.checkStats();
    if (this.levelNum >= array[2]) {
      this.experienceNum += array[1];
      this.achievement.push(array[0]);
      return array[0];
    } else {
      return "Not strong enough";
    } 
  };
}






// Roman numeral helper

function RomanNumeral() {
  
} 

RomanNumeral.prototype.toRoman = function(num) {
  var string = '';
  var n = num;
  while (n > 0) {
    if (n >= 1000) {
      string += "M";
      n -= 1000;
    } else if (n >= 900) {
      string += "CM";
      n -= 900;
    } else if (n >= 500) {
      string += "D";
      n -= 500;  
    } else if (n >= 400) {
      string += "CD";
      n -= 400;  
    } else if (n >= 100) {
      string += "C";
      n -= 100;
    } else if (n >= 90) {
      string += "XC";
      n -= 90;
    } else if (n >= 50) {
      string += "L";
      n -= 50;
    } else if (n >= 40) {
      string += "XL";
      n -= 40;
    } else if (n >= 10) {
      string += "X";
      n -= 10;  
    } else if (n >= 9) {
      string += "IX";
      n -= 9;  
    } else if (n >= 5) {
      string += "V";
      n -= 5;
    } else if (n >= 4) {
      string += "IV";
      n -= 4;
    } else if (n >= 1) {
      string += "I";
      n -= 1;  
    }
  }
  
  return string;
};

RomanNumeral.prototype.fromRoman = function(num) {
    var str = num;
    var n = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] + str[i + 1] === 'CM') {n+=900;i++; continue;}
        if (str[i] + str[i + 1] === 'CD') {n+=400;i++; continue;}
        if (str[i] + str[i + 1] === 'XC') {n+=90;i++; continue;}
        if (str[i] + str[i + 1] === 'XL') {n+=40;i++; continue;}
        if (str[i] + str[i + 1] === 'IX') {n+=9;i++; continue;}
        if (str[i] + str[i + 1] === 'IV') {n+=4;i++; continue;}
        if (str[i] === 'M') {n+=1000;}
        if (str[i] === 'D') {n+=500;}
        if (str[i] === 'C') {n+=100;}
        if (str[i] === 'L') {n+=50;}
        if (str[i] === 'X') {n+=10;}
        if (str[i] === 'V') {n+=5;}
        if (str[i] === 'I') {n+=1;}
    }
    return n;
};

var RomanNumerals = new RomanNumeral();








function valuesFromFunc(func, start, end) {
    var arr = [];
    if (arguments.length === 2) {
        for (var i = 0; i < arguments[1]; i++) {
            arr.push(func(i));
        }
    } else {
        for (var i = start; i < end; i++) {
            arr.push(func(i));
        }
    }
    return arr;
}
