/**
 * Project name(项目名称)：task2
 * File name(文件名): calendar
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/5/24
 * Time(创建时间)： 19:14
 * Version(版本): 1.0
 * Description(描述)： 无
 */


var today = new Date();
//获取当前年月日
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();
//当前月份的总天数
var allday = 0;

//推算当前一个月一共有多少天
function count()
{
    if (month != 2)
    {
        if ((month == 4) || (month == 6) || (month == 9) || (month == 11))
        {
            allday = 30;//4,6,9,11月份为30天
        }
        else
        {
            allday = 31;//其他月份除2月份为31天
        }
    }
    else
    {
        if (((year % 4) == 0 && (year % 100) != 0) || (year % 400) == 0)
        {
            allday = 29;//闰年的2月份为29天
        }
        else
        {
            allday = 28;
        }
    }
}

//显示日历标题中的当前年份和月份
function showMonth()
{
    var year_month = year + "年" + month + "月";
    document.getElementById("month").innerHTML = year_month;
}

//显示当前月份的日历
function showDate()
{
    showMonth();
    count();
    //获取本月第一天的日期对象
    var firstdate = new Date(year, month - 1, 1);
    //推算本月的第一天是星期几
    var xiqi = firstdate.getDay();
    //动态添加HTML元素
    var daterow = document.getElementById("day");
    daterow.innerHTML = " ";
    //如果本月的第一天不是星期日，前面需要空白元素补全日期
    if (xiqi != 0)
    {
        for (var i = 0; i < xiqi; i++)
        {
            var dayElement = document.createElement("div");
            dayElement.className = "everyday";
            daterow.appendChild(dayElement);
        }
    }
    //使用循环语句将当前月份的日期显示出来
    for (var j = 1; j <= allday; j++)
    {
        var dayElement = document.createElement("div");
        dayElement.className = "everyday";
        dayElement.innerHTML = j + "";
        //如果日期为今天，则显示为红色
        if (j == day)
        {
            dayElement.style.color = "red";
        }
        daterow.appendChild(dayElement);
    }
}

//显示上个月的日历
function lastMonth()
{
    if (month > 1)
    {
        month -= 1;
    }
    else
    {
        month = 12;
        year -= 1;
    }
    showDate();
}

//显示下个月的日历
function nextMonth()
{
    if (month < 12)
    {
        month += 1;
    }
    else
    {
        month = 1;
        year += 1;
    }
    showDate();
}