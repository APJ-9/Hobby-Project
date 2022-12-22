#!/bin/bash

date >> loc
html=$(find . -type f -name "*.html" ! -path "*node_modules/*" ! -path "*.cache/*" ! -path "*public/*" -exec awk NF {} \; | wc -l)
css=$(find . -type f -name "*.css" ! -path "*node_modules/*" ! -path "*.cache/*" ! -path "*public/*" -exec awk NF {} \; | wc -l)
c=$(find . -type f -name "*.c" ! -path "*node_modules/*" ! -path "*.cache/*" ! -path "*public/*" -exec awk NF {} \; | wc -l)
js=$(find . -type f -name "*.js" ! -path "*node_modules/*" ! -path "*.cache/*" ! -path "*public/*" -exec awk NF {} \; | wc -l)
jsx=$(find . -type f -name "*.jsx" ! -path "*node_modules/*" ! -path "*.cache/*" ! -path "*public/*" -exec awk NF {} \; | wc -l)
tsx=$(find . -type f -name "*.tsx" ! -path "*node_modules/*" ! -path "*.cache/*" ! -path "*public/*" -exec awk NF {} \; | wc -l)
lostcode=535
echo "HTML   $html" >> loc
echo "CSS    $css" >> loc
echo "C   $c" >> loc
echo "Java Script   $js" >> loc
echo "Java Script React   $jsx" >> loc
echo "Type Script React   $tsx" >> loc
echo "lost code count $lostcode" >> loc
echo "TOTAL `expr $html + $css + $c + $js + $jsx + $lostcode`">> loc

total=`expr $js + $jsx + $tsx`
#echo "$total" 
echo -e "HTML   $html \nCSS    $css \nC   $c \nJava Script   $js \nTOTAL `expr $html + $css + $c + $js`" > locc.txt
echo '{ "html": "'"$html"'",' > Line_Of_Code/loc.json
echo ' "css": "'"$css"'",' >> Line_Of_Code/loc.json
echo ' "javaScript": "'"$total"'"' >> Line_Of_Code/loc.json
echo '}' >> Line_Of_Code/loc.json
# echo "CSS    $css" > locc
# echo "C   $c" > locc
# echo "Java Script   $js" > locc
# echo "TOTAL `expr $html + $css + $c + $js`"> locc

#(find . -type f -name "*.js" ! -path "*node_modules/*" ! -path "*.cache/*" ! -path "*public/*" -exec awk NF {} \; | wc -l
#find . -type f -name "*.js" ! -path "*node_modules/*" ! -path "*.cache/*" ! -path "*public/*" 
#find . -type f -name "*.js" ! -path "*node_modules/*" ! -path "*.cache/*" ! -path "*public/*" -exec awk NF {} \; | wc -l

