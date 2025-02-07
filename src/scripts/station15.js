const { fromNullable } = ("fp-ts/lib/Option");
async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const result = await test()
  return await result
}

async function test() {
  return new Promise (function(resolve){
    setTimeout(function() {
      resolve('test')
    },3000);
  }).then(function(value) {
    console.log(value);
    const test = [
     { id: 1, full_name: '大木 優', first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, full_name: '山田 太郎', first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
    ];
    return test.map(test => test)
  });
}
