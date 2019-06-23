！[（标志）]（http://images.cnitblog.com/blog2015/497279/201505/051004492043385.png）

## MJRefresh

！[podversion（https://img.shields.io/cocoapods/v/MJRefresh.svg）

*使用pull-to-refresh的简单方法

##内容
* 入门
    * [功能【支持刷新哪种控件】]（＃Support_what_kinds_of_controls_to_refresh）
    * [安装【如何使用MJRefresh】]（＃How_to_use_MJRefresh）
    * [谁在使用【超过数百个应用程序正在使用MJRefresh】]（＃More_than_hundreds_of_Apps_are_using_MJRefresh）
    * [班级【MJRefresh的班级结构图】]（＃The_Class_Structure_Chart_of_MJRefresh）
*评论API
	* [MJRefreshComponent.h]（＃MJRefreshComponent.h）
	* [MJRefreshHeader.h]（＃MJRefreshHeader.h）
	* [MJRefreshFooter.h]（＃MJRefreshFooter.h）
	* [MJRefreshAutoFooter.h]（＃MJRefreshAutoFooter.h）
* 例子
    * [参考]（＃参考）
    * [下拉刷新01-默认]（＃The_drop-down_refresh_01-Default）
    * [下拉刷新02-动画图像]（＃The_drop-down_refresh_02-Animation_image）
    * [下拉刷新03-隐藏时间]（＃The_drop-down_refresh_03-Hide_the_time）
    * [下拉刷新04-隐藏状态和时间]（＃The_drop-down_refresh_04-Hide_status_and_time）
    * [下拉刷新05-DIY标题]（＃The_drop-down_refresh_05-DIY_title）
    * [下拉刷新06-DIY刷新控制]（＃The_drop-down_refresh_06-DIY_the_control_of_refresh）
    * [拉动刷新01-默认]（＃The_pull_to_refresh_01-默认）
    * [拉动刷新02-动画图像]（＃The_pull_to_refresh_02-Animation_image）
    * [拉动刷新03-隐藏刷新状态标题]（＃The_pull_to_refresh_03-Hide_the_title_of_refresh_status）
    * [拉动刷新04-全部加载]（＃The_pull_to_refresh_04-All_loaded）
    * [拉动刷新05-DIY标题]（＃The_pull_to_refresh_05-DIY_title）
    * [拉动后刷新06-隐藏后加载]（＃The_pull_to_refresh_06-Hidden_​​After_loaded）
    * [拉动刷新07-自动拉回01]（＃The_pull_to_refresh_07-Automatic_back_of_the_pull01）
    * [拉动刷新08-自动拉回02]（＃The_pull_to_refresh_08-Automatic_back_of_the_pull02）
    * [拉动刷新09-DIY控制刷新（自动刷新）]（＃The_pull_to_refresh_09-DIY_the_control_of_refresh（Automatic_refresh））
    * [拉动刷新10-DIY控制刷新（自动返回）]（＃The_pull_to_refresh_10-DIY_the_control_of_refresh（Automatic_back））
    * [UICollectionView01-下拉和下拉刷新]（＃UICollectionView01-The_pull_and_drop-down_refresh）
    * [UIWebView01-下拉刷新]（＃UIWebView01-The_drop-down_refresh）
* [希望]（#Hope）

## <a id="Support_what_kinds_of_controls_to_refresh"> </a>支持要刷新的控件类型
*`UIScrollView`，`UITableView`，`UICollectionView`，`UIWebView`

## <a id="How_to_use_MJRefresh"> </a>如何使用MJRefresh
*使用CocoaPods安装：`pod'MJRefresh'`
*使用[Carthage]安装（https://github.com/Carthage/Carthage）：`github“CoderMJLee / MJRefresh”`
*手动导入：
    *将`MJRefresh`文件夹中的所有文件拖到项目中
    *导入主文件：`#import“MJRefresh.h”`

```objc
基本定制
MJRefresh.bundle MJRefresh.h
MJRefreshConst.h MJRefreshConst.m
UIScrollView + MJExtension.h UIScrollView + MJExtension.m
UIScrollView + MJRefresh.h UIScrollView + MJRefresh.m
UIView + MJExtension.h UIView + MJExtension.m
```

## <a id="More_than_hundreds_of_Apps_are_using_MJRefresh"> </a>超过数百个应用正在使用MJRefresh
<img src =“http://images0.cnblogs.com/blog2015/497279/201506/141212365041650.png”width =“200”height =“300”>
*有关App的更多信息可以关注：[M了个J-博客园]（http://www.cnblogs.com/mjios/p/4409853.html）

## <a id="The_Class_Structure_Chart_of_MJRefresh"> </a> MJRefresh的班级结构图
！[]（http://images0.cnblogs.com/blog2015/497279/201506/132232456139177.png）
- 图表中的“红色文本类”：您可以直接使用它们
    - 下拉刷新控件类型
        - 正常：`MJRefreshNormalHeader`
        -  Gif：`MJRefreshGifHeader`
    - 拉动刷新控件类型
        - 自动刷新
            - 正常：`MJRefreshAutoNormalFooter`
            -  Gif：`MJRefreshAutoGifFooter`
        - 自动返回
            - 正常：`MJRefreshBackNormalFooter`
            -  Gif：`MJRefreshBackGifFooter`
- 图表中的“非红色文本类”：对于继承，使用DIY控制刷新
- 关于如何DIY控制刷新，您可以参考下面的图表中的类
<img src =“http://images0.cnblogs.com/blog2015/497279/201506/141358159107893.png”width =“30％”height =“30％”>

## <a id="MJRefreshComponent.h"> </a> MJRefreshComponent.h
```objc
/ **刷新控制的基类* /
@interface MJRefreshComponent：UIView
#pragma mark  - 控制Refresh的状态 

/ ** BeginRefreshing * /
- （void）beginRefreshing;
/ ** EndRefreshing * /
- （void）endRefreshing; 
/ ** IsRefreshing * /
- （BOOL）isRefreshing;

#pragma mark  - 其他
/ **根据阻力比自动改变alpha * /
@property（assign，nonatomic，getter = isAutomaticallyChangeAlpha）BOOL automaticChangeAlpha;
@结束
```

## <a id="MJRefreshHeader.h"> </a> MJRefreshHeader.h
```objc
@interface MJRefreshHeader：MJRefreshComponent
/ **创建标题* /
+（instancetype）headerWithRefreshingBlock：（MJRefreshComponentRefreshingBlock）refreshBlock;
/ **创建标题* /
+（instancetype）headerWithRefreshingTarget：（id）target refreshAction：（SEL）action;

/ **此键用于存储上次成功淹没的时间* /
@property（copy，nonatomic）NSString * lastUpdatedTimeKey;
/ **最后一次淹死成功* /
@property（强，非原子，只读）NSDate * lastUpdatedTime;

/ **忽略scrollView contentInset top * /
@property（assign，nonatomic）CGFloat ignoredScrollViewContentInsetTop;
@结束
```

## <a id="MJRefreshFooter.h"> </a> MJRefreshFooter.h
```objc
@interface MJRefreshFooter：MJRefreshComponent
/ **创造页脚* /
+（instancetype）footerWithRefreshingBlock：（MJRefreshComponentRefreshingBlock）refreshBlock;
/ **创造页脚* /
+（instancetype）footerWithRefreshingTarget：（id）target refreshAction：（SEL）action;

/ ** NoticeNoMoreData * /
- （void）noticeNoMoreData;
/ ** ResetNoMoreData（清除NoMoreData的状态）* /
- （void）resetNoMoreData;

/ **忽略scrollView contentInset bottom * /
@property（assign，nonatomic）CGFloat ignoredScrollViewContentInsetBottom;
@结束
```

## <a id="MJRefreshAutoFooter.h"> </a> MJRefreshAutoFooter.h
```objc
@interface MJRefreshAutoFooter：MJRefreshFooter
/ **是否自动刷新（默认为是）* /
@property（assign，nonatomic，getter = isAutomaticallyRefresh）BOOL automaticRefresh;

/ **当控件底部有多少是自动刷新（默认为1.0，控件底部是否显示完全，将自动刷新）* /
@property（assign，nonatomic）CGFloat triggerAutomaticallyRefreshPercent;
@结束
```

## <a id="Reference"> </a>参考
```objc
*由于此框架有更多功能，请勿编写具体文字描述其用法
*您可以直接参考示例MJTableViewController，MJCollectionViewController，MJWebViewController，更直观，更快捷。
```
<img src =“http://images0.cnblogs.com/blog2015/497279/201506/141345470048120.png”width =“30％”height =“30％”>

## <a id="The_drop-down_refresh_01-Default"> </a>下拉刷新01-Default

```objc
self.tableView.mj_header = [MJRefreshNormalHeader headerWithRefreshingBlock：^ {
   //调用此块自动进入刷新状态 
}];
或
//设置回调（一旦你进入刷新状态，然后调用目标的动作，即调用[self loadNewData]）
self.tableView.mj_header = [MJRefreshNormalHeader headerWithRefreshingTarget：self refreshAction：@selector（loadNewData）];

//立即输入刷新状态
[self.tableView.mj_header beginRefreshing];
```
！[（下拉刷新01-普通）]（http://images0.cnblogs.com/blog2015/497279/201506/141204343486151.gif）

## <a id="The_drop-down_refresh_02-Animation_image"> </a>下拉刷新02-动画图片
```objc
//设置回调（一旦你进入刷新状态，然后调用target的动作，即调用[self loadNewData]）
MJRefreshGifHeader * header = [MJRefreshGifHeader headerWithRefreshingTarget：self refreshAction：@selector（loadNewData）];
//设置动画图像的普通状态
[header setImages：idleImages forState：MJRefreshStateIdle];
//设置动画图像的拉动状态（一旦松开就输入刷新状态）
[header setImages：pullImages forState：MJRefreshStatePulling];
//设置动画图像的刷新状态
[header setImages：refreshImages forState：MJRefreshStateRefreshing];
//设置标题
self.tableView.mj_header = header;
```
！[（下拉刷新02-动画图片）（http://images0.cnblogs.com/blog2015/497279/201506/141204402238389.gif）

## <a id="The_drop-down_refresh_03-Hide_the_time"> </a>下拉刷新03-隐藏时间
```objc
//隐藏时间
header.lastUpdatedTimeLabel.hidden = YES;
```
！[（下拉刷新03-隐藏时间）]（http://images0.cnblogs.com/blog2015/497279/201506/141204456132944.gif）

## <a id="The_drop-down_refresh_04-Hide_status_and_time"> </a>下拉刷新04-隐藏状态和时间
```objc
//隐藏时间
header.lastUpdatedTimeLabel.hidden = YES;

//隐藏状态
header.stateLabel.hidden = YES;
```
！[（下拉刷新04-隐藏状态和时间0）]（http://images0.cnblogs.com/blog2015/497279/201506/141204508639539.gif）

## <a id="The_drop-down_refresh_05-DIY_title"> </a>下拉刷新05-DIY标题
```objc
//设置标题
[header setTitle：@“pull down to refresh”forState：MJRefreshStateIdle];
[header setTitle：@“Release to refresh”forState：MJRefreshStatePulling];
[header setTitle：@“Loading ...”forState：MJRefreshStateRefreshing];

//设置字体
header.stateLabel.font = [UIFont systemFontOfSize：15];
header.lastUpdatedTimeLabel.font = [UIFont systemFontOfSize：14];

//设置textColor
header.stateLabel.textColor = [UIColor redColor];
header.lastUpdatedTimeLabel.textColor = [UIColor blueColor];
```
！[（下拉刷新05-自定义文字）（http://images0.cnblogs.com/blog2015/497279/201506/141204563633593.gif）

## <a id="The_drop-down_refresh_06-DIY_the_control_of_refresh"> </a>下拉刷新06-DIY控制刷新
```objc
self.tableView.mj_header = [MJDIYHeader headerWithRefreshingTarget：self refreshAction：@selector（loadNewData）];
//对MJDIYHeader.h和MJDIYHeader.m的实现引用
```
！[（下拉刷新06-自定义刷新控件）（http://images0.cnblogs.com/blog2015/497279/201506/141205019261159.gif）

## <a id="The_pull_to_refresh_01-Default"> </a>拉动刷新01-默认
```objc
self.tableView.mj_footer = [MJRefreshAutoNormalFooter footerWithRefreshingBlock：^ {
    //调用此块自动进入刷新状态
}];
或
//设置回调（一旦你进入刷新状态，然后调用目标的动作，即调用[self loadMoreData]）
self.tableView.mj_footer = [MJRefreshAutoNormalFooter footerWithRefreshingTarget：self refreshAction：@selector（loadMoreData）];
```
！[（上拉刷新01-默认）]（http://images0.cnblogs.com/blog2015/497279/201506/141205090047696.gif）

## <a id="The_pull_to_refresh_02-Animation_image"> </a>拉动刷新02-动画图片
```objc
//设置回调（一旦你进入刷新状态，然后调用目标的动作，即调用[self loadMoreData]）
MJRefreshAutoGifFooter * footer = [MJRefreshAutoGifFooter footerWithRefreshingTarget：self refreshAction：@selector（loadMoreData）];

//设置刷新图像
[footer setImages：refreshImages forState：MJRefreshStateRefreshing];

//设置页脚
self.tableView.mj_footer = footer;
```
！[（上拉刷新02-动画图片）（http://images0.cnblogs.com/blog2015/497279/201506/141205141445793.gif）

## <a id="The_pull_to_refresh_03-Hide_the_title_of_refresh_status"> </a>提取刷新03-隐藏刷新状态标题
```objc
//隐藏刷新状态的标题
footer.refreshingTitleHidden = YES;
//如果没有上面的方法，那么使用footer.stateLabel.hidden = YES;
```
！[（上拉刷新03-隐藏刷新状态的文字）（http://images0.cnblogs.com/blog2015/497279/201506/141205200985774.gif）

## <a id="The_pull_to_refresh_04-All_loaded"> </a>拉动刷新04-全部加载
```objc
//成为NoMoreData的状态
[footer noticeNoMoreData];
```
！[（上拉刷新04-全部加载完毕）]（http://images0.cnblogs.com/blog2015/497279/201506/141205248634686.gif）

## <a id="The_pull_to_refresh_05-DIY_title"> </a>拉动刷新05-DIY标题
```objc
//设置标题
[footer setTitle：@“点击或向上拖动以刷新”forState：MJRefreshStateIdle];
[footer setTitle：@“正在加载更多...”forState：MJRefreshStateRefreshing];
[footer setTitle：@“没有更多数据”forState：MJRefreshStateNoMoreData];

//设置字体
footer.stateLabel.font = [UIFont systemFontOfSize：17];

//设置textColor
footer.stateLabel.textColor = [UIColor blueColor];
```
！[（上拉刷新05-自定义文字）（http://images0.cnblogs.com/blog2015/497279/201506/141205295511153.gif）

## <a id="The_pull_to_refresh_06-Hidden_​​After_loaded"> </a>拉动刷新06-Hidden After loaded
```objc
//拉动的隐藏电流控制刷新
self.tableView.mj_footer.hidden = YES;
```
！[（上拉刷新06-加载后隐藏）（http://images0.cnblogs.com/blog2015/497279/201506/141205343481821.gif）

## <a id="The_pull_to_refresh_07-Automatic_back_of_the_pull01"> </a>拉动刷新07-自动返回pull01
```objc
self.tableView.mj_footer = [MJRefreshBackNormalFooter footerWithRefreshingTarget：self refreshAction：@selector（loadMoreData）];
```
！[（上拉刷新07-自动回弹的上拉01）]（http://images0.cnblogs.com/blog2015/497279/201506/141205392239231.gif）

## <a id="The_pull_to_refresh_08-Automatic_back_of_the_pull02"> </a>拉动刷新08-自动拉回拉力02
```objc
MJRefreshBackGifFooter * footer = [MJRefreshBackGifFooter footerWithRefreshingTarget：self refreshAction：@selector（loadMoreData）];

//设置动画图像的正常状态
[footer setImages：idleImages forState：MJRefreshStateIdle];
//设置动画图像的拉动状态（一旦松开就输入刷新状态）
[footer setImages：pullImages forState：MJRefreshStatePulling];
//设置动画图像的刷新状态
[footer setImages：refreshImages forState：MJRefreshStateRefreshing];

//设置页脚
self.tableView.mj_footer = footer;
```
！[（上拉刷新07-自动回弹的上拉02）]（http://images0.cnblogs.com/blog2015/497279/201506/141205441443628.gif）

## <a id="The_pull_to_refresh_09-DIY_the_control_of_refresh(Automatic_refresh)"> </a>刷新刷新09-DIY控制刷新（自动刷新）
```objc
self.tableView.mj_footer = [MJDIYAutoFooter footerWithRefreshingTarget：self refreshAction：@selector（loadMoreData）];
//对MJDIYAutoFooter.h和MJDIYAutoFooter.m的实现引用
```
！[（上拉刷新09-自定义刷新控件（自动刷新））]（http://images0.cnblogs.com/blog2015/497279/201506/141205500195866.gif）

## <a id="The_pull_to_refresh_10-DIY_the_control_of_refresh(Automatic_back)"> </a>刷新10-DIY控制刷新（自动返回）
```objc
self.tableView.mj_footer = [MJDIYBackFooter footerWithRefreshingTarget：self refreshAction：@selector（loadMoreData）];
//对MJDIYBackFooter.h和MJDIYBackFooter.m的实现引用
```
！[（上拉刷新10-自定义刷新控件（自动回弹））]（http://images0.cnblogs.com/blog2015/497279/201506/141205560666819.gif）

## <a id="UICollectionView01-The_pull_and_drop-down_refresh"> </a> UICollectionView01-下拉和下拉刷新
```objc
//下拉刷新
self.collectionView.mj_header = [MJRefreshNormalHeader headerWithRefreshingBlock：^ {
   //调用此块自动进入刷新状态 
}];

//拉动刷新
self.collectionView.mj_footer = [MJRefreshAutoNormalFooter footerWithRefreshingBlock：^ {
   //调用此块自动进入刷新状态
}];
```
！[（UICollectionView01-上下拉刷新）]（http://images0.cnblogs.com/blog2015/497279/201506/141206021603758.gif）

## <a id="UIWebView01-The_drop-down_refresh"> </a> UIWebView01-下拉刷新
```objc
//添加下拉刷新的控件
self.webView.scrollView.mj_header = [MJRefreshNormalHeader headerWithRefreshingBlock：^ {
   //调用此块自动进入刷新状态
}];
```
！[（UICollectionView01-上下拉刷新）]（http://images0.cnblogs.com/blog2015/497279/201506/141206080514524.gif）

＃＃ 提醒
* ARC
* iOS> = 8.0
*无论如何，iPhone \ iPad屏幕

## <a id="Hope"> </a>希望
*如果您在使用时发现错误，希望您可以发帖我，谢谢您或尝试下载此框架的最新代码以查看BUG是否已修复）
*如果你发现使用时功能不够，希望你能问我，我非常想为这个框架添加更多有用的功能，谢谢！
*如果您想为MJRefresh贡献代码，请拉我的请求
*如果你在开发应用程序中使用MJRefresh，希望你可以去[CocoaControls]（https://www.cocoacontrols.com/controls/mjrefresh）添加iTunes路径
 你的应用程序，我将安装你的应用程序，并根据许多应用程序的使用，是一个更好的设计和改进MJRefresh，谢谢！
   * StepO1（微信只是一个例子，探索“你的应用名称itunes”）
！[（step01）（http://ww4.sinaimg.cn/mw1024/800cdf9ctw1eq0viiv5rsj20sm0ea41t.jpg）
   * StepO2
！[（步骤02）]（http://ww2.sinaimg.cn/mw1024/800cdf9ctw1eq0vilejxlj20tu0me7a0.jpg）
   * StepO3
！[（步骤03）]（http://ww1.sinaimg.cn/mw1024/800cdf9ctw1eq0viocpo5j20wc0dc0un.jpg）
   * StepO4
！[（步骤04）]（http://ww3.sinaimg.cn/mw1024/800cdf9ctw1eq0vir137xj20si0gewgu.jpg）

##寻求志同道合的小伙伴

- 因本人工作忙，没有太多时间去维护MJRefresh，在此向广大框架使用者说声：非常抱歉！😞
- 现寻求志同道合的小伙伴一起维护此框架，有兴趣的小伙伴可以[发邮件]（mailto：richermj123go@vip.qq.com）给我，非常感谢😊
- 如果一切OK，我将开放框架维护权限（github，pod等）
- 目前已经找到3位小伙伴（^  -  ^）V