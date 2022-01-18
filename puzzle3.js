/*Given two stings ransomNote and magazine, return true if ransomNote can be constructed from 
magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.
*/

/*
Algorithms 

1. compare the size of ransomNote and magazne, if the size of ransomNote is bigger than the size of 
the magezine then return false.

2. Make 2 arrays form ransomNote and magazine as ransomNoteArray and magazineArray.

3. Loop thorough the ransomNote array and check if the character is present in the magazinge array.
    3a. if the character is not present in magazine array, then return false
    3b. if the character is present then delete that particular character form magazineArray, and continue.

4. If the condition is ture for all the elements in ransomnoteArray. Then return true.
*/

function ransomNoteCheck(ransomNote, magazine )
{
    ransomNoteArray = ransomNote.split('');
    magazineArray= magazine.split('');
    
    if(ransomNote.length() > magazine.length())
    {
        return false;
    }
    for( var i = 0; i < ransomNoteArray.length; i++)
    {
        
    }   
}