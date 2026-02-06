<span style="font-family: 'Times New Roman'; font-size: 22px;">This experiment deals with the study of eigenvalues and eigenvectors of a matrix and helps the users to understand their significance in the context of linear transformations. Students will learn how to compute eigenvalues and eigenvectors, interpret their geometric meaning, and see how they describe the scaling or directional behaviour of a transformation.<br>
Matrices considered in this experiment have real entries. An <i>n</i>×1 matrix is called a column vector. Its transpose is a 1×<i>n</i> matrix called a row vector and it is also an element of <i>R</i><sup><i>n</i></sup>. These are used interchangeably as and when needed.</span><br>
**<span style="font-family: 'Times New Roman'; font-size: 22px;">1. Characteristic polynomial and characteristic equation of a matrix:</span>**
<span style="font-family: 'Times New Roman'; font-size: 22px;">The characteristic polynomial of a matrix <i>A</i> of order n×n is defined as |<i>A</i>-<i>λI</i>|, where <i>λ</i>&isin;<i>R</i>, <i>I</i> is the identity matrix and |<i>A</i>-<i>λI</i>| denotes the determinant of (<i>A</i>-<i>λI</i>). Clearly, degree of the characteristic polynomial is <i>n</i>. Characteristic polynomial of <i>A</i> is denoted by <i>f</i>(<i>λ</i>). The equation <i>f</i>(<i>λ</i>)=0, i.e. |<i>A</i>-<i>λI</i>|=0 is called the characteristic equation.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">2. Eigenvalues and eigenvectors of a matrix: </span>**
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>A</i> be a matrix of order <i>n</i>×<i>n</i>. Then <i>λ</i>&isin;<i>R</i> is called an eigenvalue of <i>A</i>, if there exists a column vector i.e. an <i>n</i>×1matrix <i>X</i>≠0 such that <i>AX</i>=<i>λX</i> and <i>X</i> is called an eigenvector corresponding to the eigenvalue <i>λ</i>.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">3. Example:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">i.) Let</span> $ A = \begin{pmatrix} 1 & 8 \\\ 1 & 3\end{pmatrix} $ <br>
<span style="font-family: 'Times New Roman'; font-size: 22px;">To find the eigenvalues of <i>A</i>, consider the characteristic equation |<i>A</i>-<i>λI</i>|=0, This gives (1-<i>λ</i>)(3-<i>λ</i>)-8=0, which implies <i>λ</i>=5 and -1. Thus the eigenvalues of <i>A</i> are 1 and 3. To find eigenvectors of <i>A</i> for <i>λ</i>=5, consider (<i>A</i>-5.<i>I</i>)<i>X</i>=0. This gives</span> $ \begin{pmatrix} -4 & 8 \\\ 1 & -2 \end{pmatrix} \begin{pmatrix} x \\\ y \end{pmatrix} = \begin{pmatrix} 0 \\\ 0 \end{pmatrix} $

<span style="font-family: 'Times New Roman'; font-size: 22px;">Thus -4<i>x</i>+8<i>y</i>=0 and <i>x</i>-2<i>y</i>=0 which implies that <i>x</i>=2<i>y</i>. So, the eigenvectors corresponding to <i>λ</i>=5 are (2<i>y</i>, <i>y</i>), where 0≠<i>y</i>&isin;<i>R</i>. To find eigenvectors of <i>A</i> for <i>λ</i>=-1, consider (<i>A</i>-(-1).I)<i>X</i>=0. This gives</span> $ \begin{pmatrix} 2 & 8 \\\ 1 & 4 \end{pmatrix}\begin{pmatrix} x \\\ y \end{pmatrix} = \begin{pmatrix} 0 \\\ 0 \end{pmatrix}. $

<span style="font-family: 'Times New Roman'; font-size: 22px;">Thus 2<i>x</i>+8<i>y</i>=0 and <i>x</i>+4<i>y</i>=0 which implies that <i>x</i>=-4<i>y</i>. So, the eigenvector corresponding to <i>λ</i>=-1 are (-4<i>y</i>, <i>y</i>),where  0≠<i>y</i>&isin;<i>R</i>.</span> $ A = \begin{pmatrix} 1 & 2 & 1 \\\ 0 & 2 & 0 \\\ 0 & 1 & 2 \end{pmatrix} $

<span style="font-family: 'Times New Roman'; font-size: 22px;">To find the eigenvalues of <i>A</i>, consider the characteristic equation |<i>A</i>-<i>λI</i>|=0. i.e.</span> $ \mid \begin{pmatrix} 1 & 2 & 1 \\\ 0 & 2 & 0 \\\ 0 & 1 & 2 \end{pmatrix} $ - $ \begin{pmatrix} λ & 0 & 0 \\\ 0 & λ & 0 \\\ 0 & 0 & λ \end{pmatrix}  \mid = 0, $ $ \text{ i.e. } \mid \begin{matrix} 1-λ & 2 & 1 \\\ 0 & 2-λ & 0 \\\ 0 & 1 & 2-λ \end{matrix} \mid $. 

<span style="font-family: 'Times New Roman'; font-size: 22px;">This gives (1-<i>λ</i>)(2-<i>λ</i>)2=0, which implies <i>λ</i>=1, 2 and 2. Thus the eigenvalues of <i>A</i> are 1, 2 and 2. To find eigenvectors of <i>A</i> for <i>λ</i>=1, consider (<i>A</i>-1.<i>I</i>)<i>X</i>=0. This gives </span> $ \begin{pmatrix} 0 & 2 & 1 \\\ 0 & 1 & 0 \\\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} x \\\ y \\\ z \end{pmatrix} = \begin{pmatrix} 0 \\\ 0 \\\ 0 \end{pmatrix}. $

<span style="font-family: 'Times New Roman'; font-size: 22px;">Thus 2<i>y</i>+<i>z</i>=0, 2<i>y</i>=0 and <i>y</i>+<i>z</i>=0 which imply that <i>y</i>=0 and <i>z</i>=0. So, the eigenvectors corresponding to <i>λ</i>=1 are (<i>x</i>, 0, 0), where 0≠<i>x</i>&isin;<i>R</i>. To find eigenvectors of <i>A</i> for <i>λ</i>=2, consider (<i>A</i>-2.<i>I</i>)X=0. This gives </span> $ \begin{pmatrix} -1 & 2 & 1 \\\ 0 & 0 & 0 \\\ 0 & 1 & 0 \end{pmatrix} \begin{pmatrix} x \\\ y \\\ z \end{pmatrix} = \begin{pmatrix} 0 \\\ 0 \\\ 0 \end{pmatrix}. $

<span style="font-family: 'Times New Roman'; font-size: 22px;">Thus <i>x</i>+2<i>y</i>+<i>z</i>=0, <i>y</i>=0 and <i>y</i>+<i>z</i>=0 which implies that <i>x</i>=-<i>z</i>. So, the eigenvector corresponding to <i>λ</i>=2 are (<i>x</i>, 0, -<i>x</i>), where 0≠<i>x</i>&isin;<i>R</i>.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">4. Eigenvalues and eigenvectors of a linear transformation:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>V</i> be a finite dimensional vector space over the field <i>R</i> and let <i>T</i>: <i>V</i>→<i>V</i> be a linear transformation. Then <i>λ</i>&isin;<i>R</i> is called an eigenvalue of, <i>T</i> if there exists <i>x</i>&isin;<i>V</i> such that <i>x</i>≠0 and <i>T</i>(<i>x</i>)=<i>λx</i>. Such an <i>x</i> is called an eigenvector corresponding to the eigenvalue <i>λ</i>.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">5. Eigen space of a linear transformation:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>V</i> be a finite dimensional vector space over the field <i>R</i>. Let <i>T</i>: <i>V</i>→<i>V</i> be a linear transformation and <i>λ</i>&isin;<i>R</i> be an eigenvalue of <i>T</i>. Then <i>E</i><sub><i>λ</i></sub>≡{<i>x</i>&isin;<i>V</i>|<i>T</i>(<i>x</i>)=<i>λx</i>} is called the eigen space corresponding to <i>λ</i>. Clearly, <i>E</i><sub>λ</sub> consists of all the eigen vectors and the zero vector. Note that <i>E</i><sub><i>λ</i></sub> is a subspace of <i>V</i>.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">6. Finding eigenvalues and eigenvectors of a linear transformation:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>V</i> be a finite dimensional vector space over the field <i>R</i> and let <i>T</i>: <i>V</i>→<i>V</i> be a linear transformation. Then to find the eigenvalue and eigenvector of <i>T</i>, consider a matrix representation <i>A</i> associated to the linear transformation <i>T</i> w.r.t. the standard basis. Eigenvalues and eigenvectors of the matrix <i>A</i> are same as that of linear transformation <i>T</i>.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">7. Example:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>T</i>:<i>R</i><sup>2</sup>→<i>R</i><sup>2</sup> be a linear transformation such that <i>T</i>(<i>x, y</i>)=(<i>y, x</i>), where <i>x, y</i>&isin;<i>R</i>. Then to find the eigenvalues and eigenvectors of <i>T</i>, consider the matrix representation given by</span> $ \begin{pmatrix} 0 & 1 \\\ 1 & 0 \end{pmatrix}. $ <span style="font-family: 'Times New Roman'; font-size: 22px;">associated to the linear transformation <i>T</i> w.r.t. the basis of <i>R</i><sup>2</sup>. Thus the eigenvalues of <i>T</i> are obtained from the characteristic equation |<i>A</i>-<i>λI</i>|=0 which implies that <i>λ</i>=1 and -1 are the eigenvalues of <i>T</i>. <br>
To find eigenvectors of <i>T</i> for <i>λ</i>=1, we solve the equation <i>T</i>(<i>x, y</i>)=(<i>x, y</i>) which implies that (<i>y, x</i>)=(<i>x, y</i>). Thus <i>y</i>=<i>x</i>. So, the eigenvectors corresponding to <i>λ</i>=1 are (<i>x, x</i>), where 0≠<i>x</i>&isin;<i>R</i> and eigen space is <i>E</i><sub>1</sub>={(<i>x, x</i>), where <i>x</i>&isin;<i>R</i>}. <br>
To find eigenvectors of <i>T</i> for <i>λ</i>=-1, we solve the equation <i>T</i>(<i>x, y</i>)=-1(<i>x, y</i>), which implies that (<i>y, x</i>)=-1(<i>x, y</i>). Thus <i>y</i>=-<i>x</i>. So, the eigenvector corresponding to <i>λ</i>=-1 are (<i>x, -x</i>), where 0≠<i>x</i>&isin;<i>R</i> and its eigen space is <i>E</i><sub>-1</sub>={(<i>x, -x</i>), where <i>x</i>&isin;<i>R</i>}.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">8. Properties of eigenvalue and eigenvector:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>A</i> be matrix of order <i>n</i>×<i>n</i> and <i>T</i>: <i>R</i><sup><i>n</i></sup>→<i>R</i><sup><i>n</i></sup>.<br>
(i.) Number of eigenvalues of a matrix <i>A</i> is less than or equal to <i>n</i>. <br>
(ii.) If 0 is an eigenvalue of a matrix <i>A</i> or a linear transformation <i>T</i>, then the matrix <i>A</i> or the linear transformation <i>T</i> is singular.<br>
(iii.) If <i>x</i> is an eigenvector of a matrix <i>A</i> or a linear transformation <i>T</i> corresponding to an eigenvalue <i>λ</i>, then <i>αx</i>, where <i>α</i>≠0 is also an eigenvector corresponding to the eigenvalue <i>λ</i><br>
(iv.) If <i>x</i> and <i>y</i> are eigenvectors corresponding to an eigenvalue <i>λ</i> of a matrix <i>A</i> or a linear transformation <i>T</i> and -<i>x</i>≠<i>y</i>, then <i>x</i>+<i>y</i> is an eigenvector corresponding to the eigenvalue <i>λ</i>.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">9. Diagonalizability:</span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Definition: A matrix <i>A</i> of order <i>n</i>×<i>n</i> is said to be diagonalizable if its eigenvectors form a basis of the vector space <i>R</i><sup><i>n</i></sup> over <i>R</i>. <br>
(i) Let <i>A</i> be diagonalizable such that <i>λ</i><sub>1</sub>, <i>λ</i><sub>2</sub>, <i>λ</i><sub>3</sub>, …, <i>λ</i><sub><i>n</i></sub> are its eigenvalues and <i>B</i>={<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, <i>x</i><sub>3</sub>, …, <i>x</i><sub><i>n</i></sub>} is a basis of <i>R</i><sup><i>n</i></sup>, where <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, <i>x</i><sub>3</sub>, …, <i>x</i><sub><i>n</i></sub> are the corresponding eigenvectors. Let <i>T</i>: <i>R</i><sup><i>n</i></sup>→<i>R</i><sup><i>n</i></sup> be the linear transformation associated with the matrix <i>A</i> w.r.t. the standard basis of <i>R</i><sup><i>n</i></sup>. Then matrix of <i>T</i> w.r.t. <i>B</i> is the diagonal matrix <i>D</i> having eigenvalues <i>λ</i><sub>1</sub>, <i>λ</i><sub>2</sub>, <i>λ</i><sub>3</sub>, …, <i>λ</i><sub><i>n</i></sub> as its diagonal entries. <br>
In such a case <i>A</i> and <i>D</i> are called similar. <br>
(ii) If a matrix <i>A</i> of order <i>n</i>×<i>n</i> has <i>n</i> distinct eigenvalues, then <i>A</i> is diagonalizable.<br>
Note: If a matrix <i>A</i> of order n×n does not have n distinct eigenvalues, then A can still be diagonalizable. This is shown in the example 9(<i>ii</i>) below.</span>

**<span style="font-family: 'Times New Roman'; font-size: 22px;">10. Example:</span>** 

$ \text{i.) Let } A = \begin{pmatrix} 2 & 0 \\\ 1 & 1\end{pmatrix} $

<span style="font-family: 'Times New Roman'; font-size: 22px;">Clearly, its eigenvalues are <i>λ</i>=1 and 2. Thus the matrix A of order 2×2 has 2 distinct eigenvalues, Furthermore, the eigenvectors (0, 1) and (1, 1) of <i>A</i> form a basis of R<sup>2</sup>. 
Hence <i>A</i> is a diagonalizable matrix as it is similar to </span> $ \text{D= } \begin{pmatrix} 1 & 0 \\\ 0 & 2\end{pmatrix}. $

$ \text{ii.) Let A= }\begin{pmatrix} 1 & 0 & 0 \\\ 0 & 1 & 0 \\\ 0 & 0 & -1 \end{pmatrix}. $
<span style="font-family: 'Times New Roman'; font-size: 22px;">Clearly, its eigenvalues are <i>λ</i>=1, 1 and -1, which are not all distinct. Furthermore, the eigenvectors (1, 0, 0), (0, 1, 0) and (0, 0, 1) of <i>A</i> form a basis of R<sup>3</sup>. Hence A is a diagonalizable matrix as it is similar to the matrix</span> $ \text{D= } \begin{pmatrix} 1 & 0 & 0 \\\ 0 & -1 & 0 \\\ 0 & 0 & 1 \end{pmatrix}. $

**<span style="font-family: 'Times New Roman'; font-size: 22px;">Remark: </span>**

<span style="font-family: 'Times New Roman'; font-size: 22px;">Thus it may be noted that the eigenvalues of a matrix may not be distinct but the matrix is diagonalizable.</span>

