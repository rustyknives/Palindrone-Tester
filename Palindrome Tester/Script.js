function palindromeTester(string)
{
    var z = 0;
    for(i = 1; i < string.length; i++)
    {
            z++
            console.log(z)
        if(string[i - 1] == string[(string.length - i)] && z == string.length - 1)
        {
            return console.log(true)
        }
        else
        {
            if(z == string.length - 1)
            {
                return console.log(false)
            }
        } 
    }
}
palindromeTester("tadcocadt");