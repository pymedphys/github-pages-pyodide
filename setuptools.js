var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="setuptools.data";var REMOTE_PACKAGE_BASE="setuptools.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","pkg_resources",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/pkg_resources","_vendor",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/pkg_resources/_vendor","packaging",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/pkg_resources","extern",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","setuptools-40.0.0-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","setuptools",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/setuptools","command",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/setuptools","_vendor",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/setuptools/_vendor","packaging",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/setuptools","extern",true,true);Module["FS_createPath"]("/","bin",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:1020998,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1464,2771,4234,5561,6751,8089,9278,10330,11531,12787,14064,15378,16407,17691,18834,20122,21312,22542,23629,24827,26198,27577,28861,29893,30826,32018,33303,34495,35561,36706,37963,39106,40330,41647,42895,44086,45288,46541,47811,49082,50110,51393,52568,53691,54796,55874,57198,58525,59727,61038,62483,64159,65610,67101,68585,69683,70930,72054,72962,74002,75057,76171,77169,78234,79330,80475,81407,82555,83677,84703,85927,87218,88331,89498,90680,91988,93216,94263,95073,96025,97010,98196,99427,100679,101642,102917,104185,104853,105953,106833,107275,108458,109499,110625,111764,112937,114025,115017,116400,117407,118431,119590,120838,122076,122979,124231,125411,126532,127422,128602,129829,131034,132178,133056,134081,135102,136089,137166,138358,139550,140670,141829,142830,143956,144949,146197,147401,148634,149794,151069,152140,153485,154515,155750,156952,158088,159321,160603,161705,163150,164284,165614,166938,168286,169604,170784,171896,173334,174475,175885,177094,177998,179234,180297,181519,182554,183809,185043,185800,186825,187908,189210,190439,191948,193181,194277,195404,196235,197169,197834,198371,199067,200147,201015,202154,203201,204435,205892,207392,208538,209861,211155,212444,213777,215031,216356,217275,218382,219478,220626,221628,222509,223691,224633,225747,226544,227697,228730,229732,230892,231948,232934,234128,235305,236269,237503,238481,239535,240846,242133,243153,244371,245487,246255,247554,248800,249967,251039,251898,252815,253400,254099,255176,256485,257806,258879,260075,261480,262833,264663,266513,268259,270028,271747,273633,275389,277072,278888,280756,282599,284366,286166,287810,289424,291098,292975,294735,296568,298426,300202,302016,303815,305671,307333,308511,309218,310368,311356,311813,312877,314138,315216,316507,317642,318601,319409,320541,321485,322496,323544,324427,325468,326675,327501,328274,329130,330011,330894,331584,332869,334103,335418,336852,338008,339398,340780,342031,343311,344591,345819,347012,348359,349654,350690,351886,352909,354079,355213,356271,357545,358891,360119,361745,363576,365457,367131,368940,370646,372542,374262,376046,377840,379716,381594,383370,385102,386868,388544,390307,392158,393932,395779,397531,399367,401248,403034,404865,406625,407635,408613,409809,410603,411131,412253,413779,415536,417328,419171,421007,422848,424539,426320,428083,429849,431563,433373,435004,436739,438460,440230,441843,443673,445435,447226,448993,450726,452421,454170,455975,457781,459052,460447,461168,462587,464109,465482,466054,466470,467380,469179,470209,471373,472498,473599,474868,475946,477339,478473,479498,480791,482186,483415,484585,485533,486914,488102,489489,490584,491845,493040,494298,495517,496728,497838,498780,499883,501152,502410,504208,505985,507758,509594,511419,513146,514917,516768,518445,520181,521984,523672,525404,527136,528896,530361,532152,533958,535814,537617,539373,541117,542908,544716,546581,548120,549200,550270,551127,552728,554202,555017,555461,556331,557736,559344,560608,561920,563145,564977,566818,568685,570296,572123,573885,575760,577354,579200,581029,582925,584762,586552,588174,589898,591614,593408,595212,597003,598792,600616,602431,604238,606035,607800,609411,610176,611233,612670,613230,614021,615338,616756,617912,619181,620626,621836,622959,624110,625260,626266,627689,629142,630419,631488,632606,633755,634924,636045,637003,638134,639129,640462,641674,642904,644260,645432,646774,647998,649272,650341,651486,652559,653773,654891,655859,656653,658464,660292,662163,663787,665618,667331,669194,670823,672628,674422,676293,678159,679942,681569,683291,684971,686718,688514,690278,692102,693882,695713,697578,699354,701202,702837,703680,704706,705991,706772,707333,708524,709778,710959,712183,713551,714759,715977,717173,718484,719734,720949,722177,723432,724630,725870,726903,727990,729348,730243,731437,732753,734057,735222,736363,737476,738572,739693,740909,742192,743257,744433,745503,746643,747796,749089,750114,751016,752224,753362,754515,755765,757006,758174,759453,760837,761999,763153,764448,765671,766800,768049,769395,770839,772163,773478,774776,776049,777375,778571,779842,781088,782294,783481,784609,785750,786944,788289,789434,790386,791596,792722,793791,795010,796317,797446,798793,799943,801089,802271,803549,804711,805998,806735,807704,808643,809856,811151,812327,813702,814787,816003,817356,818616,819869,821132,822277,823387,824526,825725,826972,828138,829292,830457,831717,832954,834268,835703,836962,838191,839474,840749,841790,842766,844038,845061,846376,848015,849451,850905,852410,853491,854799,855824,856729,857639,858739,859853,860912,861959,863076,864125,865210,866311,867507,868488,869674,870953,872107,873270,874456,875658,876922,877878,878644,879612,880702,881946,883121,884300,885375,886661,887919,888468,889476,890253,890735,891913,892897,894152,895278,896332,897483,898521,899920,900882,901973,903073,904408,905627,906490,907823,909040,910104,911090,912287,913474,914658,915720,916594,917717,918764,919832,920882,922027,923208,924436,925521,926552,927612,928764,929966,931144,932335,933480,934673,935749,937104,938240,939425,940635,941758,943081,944329,945395,946744,948004,949286,950611,951963,953267,954438,955632,957063,958180,959601,960695,961640,962940,963782,965074,966136,967399,968485,969342,970388,971420,972801,973933,975544,976723,977805,978836,979641,980533,981230,981672,982415,983477,984380,985471,986517,987827,989320,990464,991393,992299,993460,994430,995489,996363,997544,998565,999678,1000864,1001822,1002906,1004183,1005388,1006430,1007659,1008520,1009669,1010927,1012171,1013326,1014413,1015594,1016359,1017690,1018951,1020127],sizes:[1464,1307,1463,1327,1190,1338,1189,1052,1201,1256,1277,1314,1029,1284,1143,1288,1190,1230,1087,1198,1371,1379,1284,1032,933,1192,1285,1192,1066,1145,1257,1143,1224,1317,1248,1191,1202,1253,1270,1271,1028,1283,1175,1123,1105,1078,1324,1327,1202,1311,1445,1676,1451,1491,1484,1098,1247,1124,908,1040,1055,1114,998,1065,1096,1145,932,1148,1122,1026,1224,1291,1113,1167,1182,1308,1228,1047,810,952,985,1186,1231,1252,963,1275,1268,668,1100,880,442,1183,1041,1126,1139,1173,1088,992,1383,1007,1024,1159,1248,1238,903,1252,1180,1121,890,1180,1227,1205,1144,878,1025,1021,987,1077,1192,1192,1120,1159,1001,1126,993,1248,1204,1233,1160,1275,1071,1345,1030,1235,1202,1136,1233,1282,1102,1445,1134,1330,1324,1348,1318,1180,1112,1438,1141,1410,1209,904,1236,1063,1222,1035,1255,1234,757,1025,1083,1302,1229,1509,1233,1096,1127,831,934,665,537,696,1080,868,1139,1047,1234,1457,1500,1146,1323,1294,1289,1333,1254,1325,919,1107,1096,1148,1002,881,1182,942,1114,797,1153,1033,1002,1160,1056,986,1194,1177,964,1234,978,1054,1311,1287,1020,1218,1116,768,1299,1246,1167,1072,859,917,585,699,1077,1309,1321,1073,1196,1405,1353,1830,1850,1746,1769,1719,1886,1756,1683,1816,1868,1843,1767,1800,1644,1614,1674,1877,1760,1833,1858,1776,1814,1799,1856,1662,1178,707,1150,988,457,1064,1261,1078,1291,1135,959,808,1132,944,1011,1048,883,1041,1207,826,773,856,881,883,690,1285,1234,1315,1434,1156,1390,1382,1251,1280,1280,1228,1193,1347,1295,1036,1196,1023,1170,1134,1058,1274,1346,1228,1626,1831,1881,1674,1809,1706,1896,1720,1784,1794,1876,1878,1776,1732,1766,1676,1763,1851,1774,1847,1752,1836,1881,1786,1831,1760,1010,978,1196,794,528,1122,1526,1757,1792,1843,1836,1841,1691,1781,1763,1766,1714,1810,1631,1735,1721,1770,1613,1830,1762,1791,1767,1733,1695,1749,1805,1806,1271,1395,721,1419,1522,1373,572,416,910,1799,1030,1164,1125,1101,1269,1078,1393,1134,1025,1293,1395,1229,1170,948,1381,1188,1387,1095,1261,1195,1258,1219,1211,1110,942,1103,1269,1258,1798,1777,1773,1836,1825,1727,1771,1851,1677,1736,1803,1688,1732,1732,1760,1465,1791,1806,1856,1803,1756,1744,1791,1808,1865,1539,1080,1070,857,1601,1474,815,444,870,1405,1608,1264,1312,1225,1832,1841,1867,1611,1827,1762,1875,1594,1846,1829,1896,1837,1790,1622,1724,1716,1794,1804,1791,1789,1824,1815,1807,1797,1765,1611,765,1057,1437,560,791,1317,1418,1156,1269,1445,1210,1123,1151,1150,1006,1423,1453,1277,1069,1118,1149,1169,1121,958,1131,995,1333,1212,1230,1356,1172,1342,1224,1274,1069,1145,1073,1214,1118,968,794,1811,1828,1871,1624,1831,1713,1863,1629,1805,1794,1871,1866,1783,1627,1722,1680,1747,1796,1764,1824,1780,1831,1865,1776,1848,1635,843,1026,1285,781,561,1191,1254,1181,1224,1368,1208,1218,1196,1311,1250,1215,1228,1255,1198,1240,1033,1087,1358,895,1194,1316,1304,1165,1141,1113,1096,1121,1216,1283,1065,1176,1070,1140,1153,1293,1025,902,1208,1138,1153,1250,1241,1168,1279,1384,1162,1154,1295,1223,1129,1249,1346,1444,1324,1315,1298,1273,1326,1196,1271,1246,1206,1187,1128,1141,1194,1345,1145,952,1210,1126,1069,1219,1307,1129,1347,1150,1146,1182,1278,1162,1287,737,969,939,1213,1295,1176,1375,1085,1216,1353,1260,1253,1263,1145,1110,1139,1199,1247,1166,1154,1165,1260,1237,1314,1435,1259,1229,1283,1275,1041,976,1272,1023,1315,1639,1436,1454,1505,1081,1308,1025,905,910,1100,1114,1059,1047,1117,1049,1085,1101,1196,981,1186,1279,1154,1163,1186,1202,1264,956,766,968,1090,1244,1175,1179,1075,1286,1258,549,1008,777,482,1178,984,1255,1126,1054,1151,1038,1399,962,1091,1100,1335,1219,863,1333,1217,1064,986,1197,1187,1184,1062,874,1123,1047,1068,1050,1145,1181,1228,1085,1031,1060,1152,1202,1178,1191,1145,1193,1076,1355,1136,1185,1210,1123,1323,1248,1066,1349,1260,1282,1325,1352,1304,1171,1194,1431,1117,1421,1094,945,1300,842,1292,1062,1263,1086,857,1046,1032,1381,1132,1611,1179,1082,1031,805,892,697,442,743,1062,903,1091,1046,1310,1493,1144,929,906,1161,970,1059,874,1181,1021,1113,1186,958,1084,1277,1205,1042,1229,861,1149,1258,1244,1155,1087,1181,765,1331,1261,1176,871],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_setuptools.data")}Module["addRunDependency"]("datafile_setuptools.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/easy_install.py",start:0,end:126,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/py31compat.py",start:126,end:679,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/__init__.py",start:679,end:104492,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/pyparsing.py",start:104492,end:334359,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/six.py",start:334359,end:364457,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/__init__.py",start:364457,end:364457,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/appdirs.py",start:364457,end:386831,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/__about__.py",start:386831,end:387551,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/_compat.py",start:387551,end:388411,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/utils.py",start:388411,end:388832,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/specifiers.py",start:388832,end:416857,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/version.py",start:416857,end:428413,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/markers.py",start:428413,end:436661,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/_structures.py",start:436661,end:438077,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/__init__.py",start:438077,end:438590,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/requirements.py",start:438590,end:442945,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/extern/__init__.py",start:442945,end:445443,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/entry_points.txt",start:445443,end:448433,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/SOURCES.txt",start:448433,end:455037,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/PKG-INFO",start:455037,end:458262,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/dependency_links.txt",start:458262,end:458501,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/zip-safe",start:458501,end:458502,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/top_level.txt",start:458502,end:458540,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/requires.txt",start:458540,end:458615,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/archive_util.py",start:458615,end:465207,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/py27compat.py",start:465207,end:465743,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/py31compat.py",start:465743,end:466563,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/cli.exe",start:466563,end:532099,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/msvc.py",start:532099,end:572976,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/py33compat.py",start:572976,end:574171,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/namespaces.py",start:574171,end:577370,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/package_index.py",start:577370,end:617680,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/gui-32.exe",start:617680,end:683216,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/gui-64.exe",start:683216,end:758480,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/extension.py",start:758480,end:760209,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/lib2to3_ex.py",start:760209,end:762222,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/glob.py",start:762222,end:767429,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/py36compat.py",start:767429,end:770320,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/build_meta.py",start:770320,end:775991,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/dep_util.py",start:775991,end:776926,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/unicode_utils.py",start:776926,end:777922,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/launch.py",start:777922,end:778709,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/wheel.py",start:778709,end:786811,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/version.py",start:786811,end:786955,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/script (dev).tmpl",start:786955,end:787173,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/pep425tags.py",start:787173,end:798050,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/windows_support.py",start:798050,end:798768,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/sandbox.py",start:798768,end:813044,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/cli-64.exe",start:813044,end:887796,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/__init__.py",start:887796,end:893510,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/gui.exe",start:893510,end:959046,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/glibc.py",start:959046,end:962196,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/depends.py",start:962196,end:968033,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/script.tmpl",start:968033,end:968171,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/site-patch.py",start:968171,end:970473,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/dist.py",start:970473,end:1013086,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/config.py",start:1013086,end:1031107,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/cli-32.exe",start:1031107,end:1096643,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/ssl_support.py",start:1096643,end:1105135,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/monkey.py",start:1105135,end:1110339,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/saveopts.py",start:1110339,end:1110997,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/install_egg_info.py",start:1110997,end:1113200,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/register.py",start:1113200,end:1113470,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/rotate.py",start:1113470,end:1115634,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/upload_docs.py",start:1115634,end:1122945,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/bdist_rpm.py",start:1122945,end:1124453,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/py36compat.py",start:1124453,end:1129439,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/dist_info.py",start:1129439,end:1130399,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/launcher manifest.xml",start:1130399,end:1131027,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/build_clib.py",start:1131027,end:1135511,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/easy_install.py",start:1135511,end:1222562,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/build_py.py",start:1222562,end:1232158,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/setopt.py",start:1232158,end:1237243,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/test.py",start:1237243,end:1246471,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/install.py",start:1246471,end:1251154,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/upload.py",start:1251154,end:1252326,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/egg_info.py",start:1252326,end:1277126,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/alias.py",start:1277126,end:1279552,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/install_scripts.py",start:1279552,end:1281991,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/__init__.py",start:1281991,end:1282585,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/sdist.py",start:1282585,end:1289296,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/develop.py",start:1289296,end:1297356,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/bdist_egg.py",start:1297356,end:1315543,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/install_lib.py",start:1315543,end:1319383,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/build_ext.py",start:1319383,end:1332280,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/bdist_wininst.py",start:1332280,end:1332917,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/pyparsing.py",start:1332917,end:1562784,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/six.py",start:1562784,end:1592882,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/__init__.py",start:1592882,end:1592882,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/__about__.py",start:1592882,end:1593602,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/_compat.py",start:1593602,end:1594462,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/utils.py",start:1594462,end:1594883,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/specifiers.py",start:1594883,end:1622908,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/version.py",start:1622908,end:1634464,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/markers.py",start:1634464,end:1642703,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/_structures.py",start:1642703,end:1644119,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/__init__.py",start:1644119,end:1644632,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/requirements.py",start:1644632,end:1648975,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/extern/__init__.py",start:1648975,end:1651476,audio:0},{filename:"/bin/easy_install",start:1651476,end:1651920,audio:0},{filename:"/bin/easy_install-3.7",start:1651920,end:1652372,audio:0}],remote_package_size:1025094,package_uuid:"e65c43b9-e6f9-45f4-8bae-d6eec178301c"})})();