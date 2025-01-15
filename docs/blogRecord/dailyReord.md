
# 计划list
## 60day前端

- [ ] 每日算法3题 手写两题（限定范围内codetop 反复刷）
- [ ] 1-10 八股 + 小练习 + 各种源码
- [ ]  10 - 20 node + webpack
- [ ] 20 - 30 深度挖掘简历
+ 熟悉简历上的实习&项目
+ 组件库-把重点说的组件亮点挑出来重复实践
+ 项目平台功能，突出一个对比和思考
+ 从组件基础API设计 到重点功能的实现 用库还是造轮子 业界最佳实践如何 能否自己实现轮子从而更贴合自己组件体系
+ 前端监控-常见诸如fmp之类指标 白屏检测 各种事件检测 错误埋点 兼容方案 修正机制 降级方案 数据上报方案 业界如何实现 以及对后续不断拓展功能的思考 可实现sdk+管控平台
- [ ] 30-40 熟悉 
+ react api 渲染原理 
+ 路由状态管理器 浏览器原理
+ 计算机网络 全局八股复习
- [ ] 40 - 50 调整最新面经和八股
- [ ] 50 - 60 
+ 不断反复整理自己八股、手写、算法
+ 复盘、自己问自己
+ 回顾实力开发流程&整理软实力方面问答

## 2025/1/12 day1
- [ ] 每日算法

:::info
3.无重复字符的最长子串 

思路：使用双指针方法维护一个滑动窗口，计算滑动窗口的max最大值就是答案

:::

```javascript
https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 窗口做记录操作
    let ans = 0;
    let left = 0;
    const window = new Set();
    for(let right = 0; right < s.length; right++) {
        const c = s[right]
        while(window.has(c)) {
            window.delete(s[left])
            left++;
        }
        // 删除完毕后再次添加c内容
        window.add(c)
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};


```

:::info
[88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)

处理copy数组大小的时候，可以考虑从后往前copy

思路

标签：从后向前数组遍历

因为 nums1 的空间都集中在后面，所以从后向前处理排序的数据会更好，节省空间，一边遍历一边将值填充进去

设置指针 len1 和 len2 分别指向 nums1 和 nums2 的有数字尾部，从尾部值开始比较遍历，同时设置指针 len 指向 nums1 的最末尾，每次遍历比较值大小之后，则进行填充

当 len1<0 时遍历结束，此时 nums2 中海油数据未拷贝完全，将其直接拷贝到 nums1 的前面，最后得到结果数组

时间复杂度：O(m+n)



:::

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 一般数据的排序移动可以考虑从后往前移动的方法
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while(len1 >= 0 && len2 >= 0) {
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
    // then copy the left nums2 to nums1
    if(len2 >= 0) {
        while(len2 >= 0) {
            nums1[len2] = nums2[len2];
            len2--;
        }
    }
};
```

:::info
[165. 比较版本号](https://leetcode.cn/problems/compare-version-numbers)

模拟

根据题意，对字符串进行分割，诸位比较「修订号」大小即可。

对于缺省的修订号位置，使用 0 进行代指。

:::

```javascript
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    // split 对比比较 比较常规的操作思路
    let v1 = version1.split('.')
    let v2 = version2.split('.')
    let n = v1.length;
    let m = v2.length;
    let i = 0, j = 0;
    while(i < n || j < m) {
        let a = 0, b = 0;
        if(i < n) a = parseInt(v1[i++])
        if(j < m) b = parseInt(v2[j++])
        if(a != b) return a > b ? 1 : -1
    } 
    return 0;
};
```

- [ ] 手写题



## 2025/1/13 day2
+ 算法
    - 3.无重复字符的最长子串 code review ✅  需要提醒
    - 88 合并两个有序数组 code review✅ 需要提醒
    - 165 比较版本号 code review   ok 完成，代码不够优雅
    - 1 两数之和  丝滑通过
    - 415 字符串相加  模拟十位数相加的过程，正常的模拟逻辑
    - 146 LRU 缓存 need see help 有难度 掌握思路 手写拆分



+ js系列
    - Set WeakSet Map WeakMap

## 2025/1/14 day3
算法list

+ 146 LRU 缓存 code review 手写需反复加深
+ 415 字符串相加  code review 还不错
+ 27 移除元素： 提示使用快慢指针方法，同时注意分别赋值的语法错误 let slow = 0, fast = 0;
+ 26. 删除有序数组中的重复项  快慢双指针 逻辑类似，注意边界判断（对应算法拓展- 保留k个相同数字）一般性操作
+ 80. 删除有序数组中的重复项 II  上述通用拓展题 比较难 需要题解（统一都要注意最后返回的边界问题
+ 283 移动零 类似快慢的解法，注意题意是移动0，swap优化算法

vue API list 总览

## 2025/1/15 day4
算法list
- 450 二叉树删除节点 
:::info
[450. 删除二叉搜索树中的节点](https://leetcode.cn/problems/delete-node-in-a-bst/description/)
思路：由于树结构的特殊性质，使用递归，对三种不同情况进行val值删除处理， 三种情况分别对应
root.val < key 操作右子树
root.val > key 操作左子树
root.val == key 删除根节点 左右子树进行拼接（找：左子树最大/右子树最小）
:::
```typescript
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// 使用递归对搜索树不同key进行操作  < = > 三种不同操作
function deleteNode(root: TreeNode | null, key: number): TreeNode | null { 
  if(!root) return null;
  if(root.val == key) {
    // find the left tree max to link root.right
    if(!root.right) return root.left;
    if(!root.left ) return root.right;
    let t: TreeNode | null = root.left;
    while(t!.right) t = t!.right;
    // 连接右边
    t!.right = root.right;
    return root.left;
  } else if(root.val < key) {
    // 比目标值小 那么在右子树进行操作
    root.right = deleteNode(root.right, key);
  } else {
    root.left = deleteNode(root.left, key);
  }
  return null
}

```



ES6 标准

+ proxy





<hr />


<h1 id="wgeAd"><font style="color:rgb(62, 76, 91);">案例标准</font><font style="color:rgb(62, 76, 91);">♿️</font></h1>
<font style="color:rgb(62, 76, 91);">1、本科及以上学历，两年以上工作经验，扎实的计算机基础和前端基础； </font>

<font style="color:rgb(62, 76, 91);">2、熟练掌握React/Vue等大型前端框架，理解底层原理，能够灵活运用； </font>

<font style="color:rgb(62, 76, 91);">3、熟悉前端工程化相关及原理，具备良好的架构设计和工程设计能力； </font>

<font style="color:rgb(62, 76, 91);">4、有跨端开发经验（React Native/Weex/Flutter）加分； </font>

<font style="color:rgb(62, 76, 91);">5、有桌面端Electron框架开发、Web音视频相关实践经验加分。</font>

<font style="color:rgb(62, 76, 91);">熟悉前端工程化相关及原理，具备良好的架构设计和工程设计能力； </font>

<font style="color:rgb(62, 76, 91);">有中后台应用的工程经验；</font>

<font style="color:rgb(62, 76, 91);">有全栈实践，熟悉 Node/Python/Go 加分；</font>











