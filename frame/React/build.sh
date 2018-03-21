
DIR=`pwd`

cp "$DIR/../../webpack.config.js" "$DIR/webpack.config.js"
echo -e "$GREENCOLOR copy webpack.config.js.$NOCOLOR"
echo -e " "

webpack webpack.config.js

rm -f "$DIR/webpack.config.js"