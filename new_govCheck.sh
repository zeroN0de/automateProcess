#!/bin/bash --login

#시간변수선언
today="`date '+%Y_%m_%d %H:%M' -d '9 hour'`"

# checking gov
$(which atreidesd) q gov proposals > ~/bot/atreidesGOV.txt
atr=`cat ~/bot/atreidesGOV.txt`
atr2=`cat ~/bot/atreidesGOV2.txt`
if [ "$atr" == "$atr2" ]; then
    echo ""$today" not exist ATR NEW GOV"

elif [ "$atr" != "$atr2" ]; then
    curl -k https://api.telegram.org/bot{botToken}:AAHrwdb-Us2CItP4ufAl8LmK4r_MFppaNRw/sendMessage -d "chat_id={chatID}" --data-urlencode "text= $today **ATR 거버넌스** "http://pingpub-goa.s3-website.ap-northeast-2.amazonaws.com/atreides/gov""
    cat ~/bot/atreidesGOV.txt > ~/bot/atreidesGOV2.txt
fi

$(which harkonnend) q gov proposals > ~/bot/harkonnenGOV.txt
har=`cat ~/bot/harkonnenGOV.txt`
har2=`cat ~/bot/harkonnenGOV2.txt`
if [ "$har" == "$har2" ]; then
    echo ""$today" not exist HAR NEW GOV"

elif [ "$har" != "$har2" ]; then
    curl -k https://api.telegram.org/bot{botToken}:AAHrwdb-Us2CItP4ufAl8LmK4r_MFppaNRw/sendMessage -d "chat_id={chatID}" --data-urlencode "text= $today **HAR 거버넌스** "http://pingpub-goa.s3-website.ap-northeast-2.amazonaws.com/harkonnen/gov""
    cat ~/bot/harkonnenGOV.txt > ~/bot/harkonnenGOV2.txt
fi

$(which corrinod) q gov proposals > ~/bot/corrinoGOV.txt
cor=`cat ~/bot/corrinoGOV.txt`
cor2=`cat ~/bot/corrinoGOV2.txt`
if [ "$cor" == "$cor2" ]; then
    echo ""$today" not exist COR NEW GOV"

elif [ "$cor" != "$cor2" ]; then
    curl -k https://api.telegram.org/bot{botToken}:AAHrwdb-Us2CItP4ufAl8LmK4r_MFppaNRw/sendMessage -d "chat_id={chatID}" --data-urlencode "text= $today **COR 거버넌스** "http://pingpub-goa.s3-website.ap-northeast-2.amazonaws.com/corrino/gov""
    cat ~/bot/corrinoGOV.txt > ~/bot/corrinoGOV2.txt
fi

$(which ordosd) q gov proposals > ~/bot/ordosGOV.txt
ord=`cat ~/bot/ordosGOV.txt`
ord2=`cat ~/bot/ordosGOV2.txt`
if [ "$ord" == "$ord2" ]; then
    echo ""$today" not exist ORD NEW GOV"

elif [ "$ord" != "$ord2" ]; then
    curl -k https://api.telegram.org/bot{botToken}:AAHrwdb-Us2CItP4ufAl8LmK4r_MFppaNRw/sendMessage -d "chat_id={chatID}" --data-urlencode "text= $today **ORD 거버넌스** "http://pingpub-goa.s3-website.ap-northeast-2.amazonaws.com/ordos/gov""
    cat ~/bot/ordosGOV.txt > ~/bot/ordosGOV2.txt
fi