recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    const files = [];

    const pushFiles = (arr) => {
      arr.map((file) => {
        files.push(file)
      })
    }

    data.files.length > 0 && dirName == data.dirName ? pushFiles(data.files) : null
    if(data.files.length > 0){
      if(dirName){
        if(dirName == data.dirName){
          pushFiles(data.files)
        }
      } else {
        pushFiles(data.files)
      }
    }

    if (data.subDirs.length > 0) {
      data.subDirs.map((subDir) => {
        if(dirName){
          if (dirName == subDir.dirName) {
            pushFiles(subDir.files)
            subDir.subDirs.length > 0 ? pushFiles(subDir.subDirs[0].files) : null
          }
        } else {
          pushFiles(subDir.files)
          subDir.subDirs.length > 0 ? pushFiles(subDir.subDirs[0].files) : null
        }
      })
    }
    return files;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    const numbers = [1, 1];
    while(numbers.length < n){
      numbers.push((numbers[numbers.length-1])+(numbers[numbers.length-2]));
    }
    return numbers[n-1]
  },
};
