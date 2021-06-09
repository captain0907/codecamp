export const checkImage = (image: File) => {
  if (!image) {
    alert("이미지가 없습니다.");
    return false;
  }

  if (image.size > 5 * 1024 * 1024) {
    alert("파일이 너무 큽니다.(5MB 제한)");
    return false;
  }

  if (!image.type.includes("png")) {
    alert("파일을 확인해 주세요.");
    return false;
  }

  return true;
};
