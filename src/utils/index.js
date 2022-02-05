import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy年M月d日 HH時mm分');
}

export function translateErrors(code) {
  const error = { title: 'エラー', description: '時間をおいてお試しください' };
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'メールアドレスが不正です。';
      break;
    case 'auth/user-disabled':
      error.description = 'サービスの利用が停止されています';
      break;
    case 'auth/user-not-found':
      error.description = 'メールアドレスまたはパスワードが違います';
      break;
    case 'auth/weak-password':
      error.description = 'パスワードは6文字以上にしてください';
      break;
    case 'auth/wrong-password':
      error.description = 'メールアドレスまたはパスワードが違います';
      break;
    case 'auth/email-already-in-use':
      error.description = 'このメールアドレスは使用されています';
      break;
    default:
  }
  return error;
}
// ex:
// import firebaseError form 'firebase/error';
// firebaseError(e, 'signin');
// export default (e, method) => {
//   switch (e.code) {
//     case 'auth/cancelled-popup-request':
//     case 'auth/popup-closed-by-user':
//       return null;
//     case 'auth/email-already-in-use':
//       if (method.indexOf('signup') !== -1) {
//         return 'このメールアドレスは使用されています';
//       } else {
//         return 'メールアドレスまたはパスワードが違います';
//       }
//     case 'auth/invalid-email':
//       return 'メールアドレスの形式が正しくありません';
//     case 'auth/user-disabled':
//       return 'サービスの利用が停止されています';
//     case 'auth/user-not-found':
//       return 'メールアドレスまたはパスワードが違います';
//     case 'auth/user-mismatch':
//       if (method === 'signin/popup') {
//         return '認証されているユーザーと異なるアカウントが選択されました';
//       } else {
//         return 'メールアドレスまたはパスワードが違います';
//       }
//     case 'auth/weak-password':
//       return 'パスワードは6文字以上にしてください';
//     case 'auth/wrong-password':
//       return 'メールアドレスまたはパスワードが違います';
//     case 'auth/popup-blocked':
//       return '認証ポップアップがブロックされました。ポップアップブロックをご利用の場合は設定を解除してください';
//     case 'auth/operation-not-supported-in-this-environment':
//     case 'auth/auth-domain-config-required':
//     case 'auth/operation-not-allowed':
//     case 'auth/unauthorized-domain':
//       return '現在この認証方法はご利用頂けません';
//     case 'auth/requires-recent-login':
//       return '認証の有効期限が切れています';
//     default:
//       if (method.indexOf('signin') !== -1) {
//         return '認証に失敗しました。しばらく時間をおいて再度お試しください';
//       } else {
//         return 'エラーが発生しました。しばらく時間をおいてお試しください';
//       }
//   }
// };
