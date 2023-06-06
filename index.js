function saturdayFun(value = "roller-skate")
{
    return "This Saturday, I want to " + value + "!";
}

function mondayWork(value = "go to the office")
{
    return "This Monday, I will " + value + ".";
}

function wrapAdjective(wrapchar = "*")
{
    const mystr = "You are ";
    return function (value = "special") {
        return mystr + wrapchar + value + wrapchar + "!";
    };
}
