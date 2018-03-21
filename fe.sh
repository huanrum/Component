
DIR=`pwd`

NOCOLOR='\033[0m'
REDCOLOR='\033[37;41m'
GREENCOLOR='\033[34;42m'

function webpack_fun(){

    cp "$DIR/webpack.config.js" "$DIR/$1/webpack.config.js"
    echo -e "$GREENCOLOR copy webpack.config.js.$NOCOLOR"
    echo -e " "

    cp "$DIR/build.sh" "$DIR/$1/build.sh"
    echo -e "$GREENCOLOR copy build.sh.$NOCOLOR"
    echo -e " "

    echo -e "$REDCOLOR run build.sh.$NOCOLOR"
    echo -e " "

#    $DIR/$1/build.sh $1

#    rm -f "$DIR/$1/webpack.config.js"
#    rm -f "$DIR/$1/build.sh"
}



#!bin/sh
for file in ./frame/*
do
    if test -f $file
    then
        echo $file 是文件
    else
        echo $file 是目录
        webpack_fun $file
        echo
        echo 
    fi
done


