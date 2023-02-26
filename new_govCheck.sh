#!/bin/bash --login

#시간변수선언
today="`date '+%Y_%m_%d %H:%M:%S UTC'`"

# checking gov
$(which atreidesd) q gov proposals > ~/bot/atreidesGOV.txt
atr=`cat ~/bot/atreidesGOV.txt`
atr2=`cat ~/bot/atreidesGOV2.txt`
if [ "$atr" == "$atr2" ]; then
    echo ""$today" not exist ATR NEW GOV"

elif [ "$atr" != "$atr2" ]; then
    curl -k https://api.telegram.org/bot{botToken}:AAHrwdb-Us2CItP4ufAl8LmK4r_MFppaNRw/sendMessage -d "chat_id={chatID}" --data-urlencode "text= **$today**
Governance checking every 10 min
You can check new ATR GOV
"https://explorer.runeterra.info/atreides/gov""
        sleep 2
        cat /home/ubuntu/bot/atreidesGOV.txt > /home/ubuntu/bot/atreidesGOV2.txt
        sleep 2
fi

$(which harkonnend) q gov proposals > ~/bot/harkonnenGOV.txt
har=`cat ~/bot/harkonnenGOV.txt`
har2=`cat ~/bot/harkonnenGOV2.txt`
if [ "$har" == "$har2" ]; then
    echo ""$today" not exist HAR NEW GOV"

elif [ "$har" != "$har2" ]; then
    curl -k https://api.telegram.org/bot{botToken}:AAHrwdb-Us2CItP4ufAl8LmK4r_MFppaNRw/sendMessage -d "chat_id={chatID}" --data-urlencode "text= **$today**
Governance checking every 10 min
You can check new HAR GOV
"https://explorer.runeterra.info/harkonnen/gov""
        sleep 2
        cat /home/ubuntu/bot/harkonnenGOV.txt > /home/ubuntu/bot/harkonnenGOV2.txt
        sleep 2
fi

$(which corrinod) q gov proposals > ~/bot/corrinoGOV.txt
cor=`cat ~/bot/corrinoGOV.txt`
cor2=`cat ~/bot/corrinoGOV2.txt`
if [ "$cor" == "$cor2" ]; then
    echo ""$today" not exist COR NEW GOV"

elif [ "$cor" != "$cor2" ]; then
    curl -k https://api.telegram.org/bot{botToken}:AAHrwdb-Us2CItP4ufAl8LmK4r_MFppaNRw/sendMessage -d "chat_id={chatID}" --data-urlencode "text= **$today**
Governance checking every 10 min
You can check new COR GOV
"https://explorer.runeterra.info/corrino/gov""
        sleep 2
        cat /home/ubuntu/bot/corrinoGOV.txt > /home/ubuntu/bot/corrinoGOV2.txt
        sleep 2
fi

$(which ordosd) q gov proposals > ~/bot/ordosGOV.txt
ord=`cat ~/bot/ordosGOV.txt`
ord2=`cat ~/bot/ordosGOV2.txt`
if [ "$ord" == "$ord2" ]; then
    echo ""$today" not exist ORD NEW GOV"

elif [ "$ord" != "$ord2" ]; then
    curl -k https://api.telegram.org/bot{botToken}:AAHrwdb-Us2CItP4ufAl8LmK4r_MFppaNRw/sendMessage -d "chat_id={chatID}" --data-urlencode "text= **$today**
Governance checking every 10 min
You can check new ORD GOV
"https://explorer.runeterra.info/ordos/gov""
        sleep 2
        cat /home/ubuntu/bot/ordosGOV.txt > /home/ubuntu/bot/ordosGOV2.txt
        sleep 2
fi