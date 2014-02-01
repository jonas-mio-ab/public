/**
 * Highlight parts of a text string
 *
 * @param {string} haystack The string being searched, otherwise known as the haystack.
 * @param {string} needle The value being searched for, otherwise known as the needle.
 * @return {string} This function returns a string with highlighted text.
 */
function highlight( haystack, needle, wrapTags )
{
	var hlString = '';
	var i = -1;
    
    if (typeof wrapTags[1] !== 'string') wrapTags = [ '<span style="background:#fff700;">', '</span>' ];

	while ( haystack.length > 0 )
	{
		i = haystack.toLowerCase().indexOf( needle.toLowerCase(), i + 1 );
		if ( i < 0 )
		{
			hlString += haystack;
			haystack = '';
		}
		else
		{
			hlString += haystack.substring( 0, i ) + 
                        wrapTags[0] + 
                        haystack.substr( i, needle.length ) + 
                        wrapTags[1];
			haystack  = haystack.substr( i + needle.length );
			i = -1;
		}
	}
	
	return hlString;
}
