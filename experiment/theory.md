This experiment deals with the study of eigenvalues and eigenvectors of a matrix and helps the users to understand their significance in the context of linear transformations. Students will learn how to compute eigenvalues and eigenvectors, interpret their geometric meaning, and see how they describe the scaling or directional behaviour of a transformation.<br>
Matrices considered in this experiment have real entries. An <i>n</i>×1 matrix is called a column vector. Its transpose is a 1×<i>n</i> matrix called a row vector and it is also an element of <i>R</i><sup><i>n</i></sup>. These are used interchangeably as and when needed.
#### 1. Characteristic polynomial and characteristic equation of a matrix:
The characteristic polynomial of a matrix <i>A</i> of order n×n is defined as |<i>A</i>-<i>λI</i>|, where <i>λ</i>&isin;<i>R</i>, <i>I</i> is the identity matrix and |<i>A</i>-<i>λI</i>| denotes the determinant of (<i>A</i>-<i>λI</i>). Clearly, degree of the characteristic polynomial is <i>n</i>. Characteristic polynomial of <i>A</i> is denoted by <i>f</i>(<i>λ</i>). The equation <i>f</i>(<i>λ</i>)=0, i.e. |<i>A</i>-<i>λI</i>|=0 is called the characteristic equation.

#### 2. Eigenvalues and eigenvectors of a matrix: 
Let <i>A</i> be a matrix of order <i>n</i>×<i>n</i>. Then <i>λ</i>&isin;<i>R</i> is called an eigenvalue of <i>A</i>, if there exists a column vector i.e. an <i>n</i>×1matrix <i>X</i>≠0 such that <i>AX</i>=<i>λX</i> and <i>X</i> is called an eigenvector corresponding to the eigenvalue <i>λ</i>.

#### 3. Examples:

$$
\begin{aligned}
&\hspace{-9.2cm} \text{i.) Let } A = \begin{pmatrix} 1 & 8 \\\ 1 & 3\end{pmatrix}
\end{aligned}
$$

To find the eigenvalues of <i>A</i>, consider the characteristic equation |<i>A</i>-<i>λI</i>|=0, This gives (1-<i>λ</i>)(3-<i>λ</i>)-8=0, which implies <i>λ</i>=5 and -1. Thus the eigenvalues of <i>A</i> are 1 and 3. To find eigenvectors of <i>A</i> for <i>λ</i>=5, consider (<i>A</i>-5.<i>I</i>)<i>X</i>=0. This gives

$$
\begin{pmatrix} -4 & 8 \\\ 1 & -2 \end{pmatrix} \begin{pmatrix} x \\\ y \end{pmatrix} = \begin{pmatrix} 0 \\\ 0 \end{pmatrix}
$$

Thus -4<i>x</i>+8<i>y</i>=0 and <i>x</i>-2<i>y</i>=0 which implies that <i>x</i>=2<i>y</i>. So, the eigenvectors corresponding to <i>λ</i>=5 are (2<i>y</i>, <i>y</i>), where 0≠<i>y</i>&isin;<i>R</i>. To find eigenvectors of <i>A</i> for <i>λ</i>=-1, consider (<i>A</i>-(-1).I)<i>X</i>=0. This gives

$$
\begin{pmatrix} 2 & 8 \\\ 1 & 4 \end{pmatrix}\begin{pmatrix} x \\\ y \end{pmatrix} = \begin{pmatrix} 0 \\\ 0 \end{pmatrix}.
$$

Thus 2<i>x</i>+8<i>y</i>=0 and <i>x</i>+4<i>y</i>=0 which implies that x=-4y. So, the eigenvector corresponding to λ=-1 are (-4y, y),where  0≠y&isin;R.

$$
\begin{aligned}
&\hspace{-9.2cm} \text{ii.) Let } A = \begin{pmatrix} 1 & 2 & 1 \\\ 0 & 2 & 0 \\\ 0 & 1 & 2 \end{pmatrix}
\end{aligned}
$$

To find the eigenvalues of A, consider the characteristic equation |A-λI|=0. 

$$
\begin{aligned}
\text{ i.e. }\mid \begin{pmatrix} 1 & 2 & 1 \\\ 0 & 2 & 0 \\\ 0 & 1 & 2 \end{pmatrix} - \begin{pmatrix} λ & 0 & 0 \\\ 0 & λ & 0 \\\ 0 & 0 & λ \end{pmatrix}  \mid= 0,
\text{ i.e. }\mid \begin{matrix} 1-λ & 2 & 1 \\\ 0 & 2-λ & 0 \\\ 0 & 1 & 2-λ \end{matrix} \mid.
\end{aligned}
$$


This gives (1-λ)(2-λ)2=0, which implies λ=1, 2 and 2. Thus the eigenvalues of A are 1, 2 and 2. To find eigenvectors of A for λ=1, consider (A-1.I)X=0. This gives 

$$
\begin{aligned}
\begin{pmatrix} 0 & 2 & 1 \\\ 0 & 1 & 0 \\\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} x \\\ y \\\ z \end{pmatrix} = \begin{pmatrix} 0 \\\ 0 \\\ 0 \end{pmatrix}.
\end{aligned}
$$

Thus 2y+z=0, 2y=0 and y+z=0 which imply that y=0 and z=0. So, the eigenvectors corresponding to λ=1 are (x, 0, 0), where 0≠x&isin;R. To find eigenvectors of A for λ=2, consider (A-2.I)X=0. This gives 

$$
\begin{aligned}
\begin{pmatrix} -1 & 2 & 1 \\\ 0 & 0 & 0 \\\ 0 & 1 & 0 \end{pmatrix} \begin{pmatrix} x \\\ y \\\ z \end{pmatrix} = \begin{pmatrix} 0 \\\ 0 \\\ 0 \end{pmatrix}.
\end{aligned}
$$

Thus x+2y+z=0, y=0 and y+z=0 which implies that x=-z. So, the eigenvector corresponding to λ=2 are (x, 0, -x), where 0≠x&isin;R.


#### 4. Eigenvalues and eigenvectors of a linear transformation: 
Let V be a finite dimensional vector space over the field R and let T: V→V be a linear transformation. Then λ&isin;R is called an eigenvalue of, T if there exists x&isin;V such that x≠0 and T(x)=λx. Such an x is called an eigenvector corresponding to the eigenvalue λ.
####  5. Eigen space of a linear transformation: 
Let V be a finite dimensional vector space over the field R. Let T: V→V be a linear transformation and λ&isin;R be an eigenvalue of T. Then E<sub>λ</sub>≡{x&isin;V|T(x)=λx} is called the eigen space corresponding to λ. Clearly, E<sub>λ</sub> consists of all the eigen vectors and the zero vector. Note that E<sub>λ</sub> is a subspace of V.
#### 6. Finding eigenvalues and eigenvectors of a linear transformation:
Let V be a finite dimensional vector space over the field R and let T: V→V be a linear transformation. Then to find the eigenvalue and eigenvector of T, consider a matrix representation A associated to the linear transformation T w.r.t. the standard basis. Eigenvalues and eigenvectors of the matrix A are same as that of linear transformation T.
#### 7. Example:
Let T:R<sup>2</sup>→R<sup>2</sup> be a linear transformation such that T(x, y)=(y, x), where x, y&isin;R. Then to find the eigenvalues and eigenvectors of T, consider the matrix representation given by

$$
 \begin{pmatrix} 0 & 1 \\\ 1 & 0 \end{pmatrix}.
$$

associated to the linear transformation T w.r.t. the basis of R<sup>2</sup>. Thus the eigenvalues of T are obtained from the characteristic equation |A-λI|=0 which implies that λ=1 and -1 are the eigenvalues of T. <br>
To find eigenvectors of T for λ=1, we solve the equation T(x, y)=(x, y) which implies that (y, x)=(x, y). Thus y=x. So, the eigenvectors corresponding to λ=1 are (x, x), where 0≠x&isin;R and eigen space is E<sub>1</sub>={(x, x), where x&isin;R}. <br>
 To find eigenvectors of T for λ=-1, we solve the equation T(x, y)=-1(x, y), which implies that (y, x)=-1(x, y). Thus y=-x. So, the eigenvector corresponding to λ=-1 are (x, -x), where 0≠x&isin;R and its eigen space is E<sub>-1</sub>={(x, -x), where x&isin;R}.

#### 8. Properties of eigenvalue and eigenvector:
Let A be matrix of order n×n and T: R<sup>n</sup>→R<sup>n</sup>.<br>
(i.) Number of eigenvalues of a matrix A is less than or equal to n. <br>
(ii.) If 0 is an eigenvalue of a matrix A or a linear transformation T, then the matrix A or the linear transformation T is singular.<br>
(iii.) If x is an eigenvector of a matrix A or a linear transformation T corresponding to an eigenvalue λ, then αx, where α≠0 is also an eigenvector corresponding to the eigenvalue λ<br>
(iv.) If x and y are eigenvectors corresponding to an eigenvalue λ of a matrix A or a linear transformation T and -x≠y, then x+y is an eigenvector corresponding to the eigenvalue λ.

####  9. Diagonalizability:
Definition: A matrix A of order n×n is said to be diagonalizable if its eigenvectors form a basis of the vector space R<sup>n</sup> over R. <br>
(i) Let A be diagonalizable such that λ<sub>1</sub>, λ<sub>2</sub>, λ<sub>3</sub>, …, λ<sub>n</sub> are its eigenvalues and B={x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, …, x<sub>n</sub>} is a basis of R<sup>n</sup>, where x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, …, x<sub>n</sub> are the corresponding eigenvectors. Let T: R<sup>n</sup>→R<sup>n</sup> be the linear transformation associated with the matrix A w.r.t. the standard basis of R<sup>n</sup>. Then matrix of T w.r.t. B is the diagonal matrix D having eigenvalues λ<sub>1</sub>, λ<sub>2</sub>, λ<sub>3</sub>, …, λ<sub>n</sub> as its diagonal entries. <br>
In such a case A and D are called similar. <br>
(ii) If a matrix A of order n×n has n distinct eigenvalues, then A is diagonalizable.<br>
Note: If a matrix A of order n×n does not have n distinct eigenvalues, then A can still be diagonalizable. This is shown in the example 9(ii) below.

#### 10. Examples:
$$
\begin{aligned}
&\hspace{-9.2cm} \text{i.) Let } A = \begin{pmatrix} 2 & 0 \\\ 1 & 1\end{pmatrix}
\end{aligned}
$$

Clearly, its eigenvalues are λ=1 and 2. Thus the matrix A of order 2×2 has 2 distinct eigenvalues, Furthermore, the eigenvectors (0, 1) and (1, 1) of A form a basis of R<sup>2</sup>. 
Hence A is a diagonalizable matrix as it is similar to 

$$
\begin{aligned}
&\hspace{-3cm} \text{D= } \begin{pmatrix} 1 & 0 \\\ 0 & 2\end{pmatrix}. \\
&\hspace{-9.2cm} \text{ii.) Let A= }\begin{pmatrix} 1 & 0 & 0 \\\ 0 & 1 & 0 \\\ 0 & 0 & -1 \end{pmatrix}.
\end{aligned}
$$
 Clearly, its eigenvalues are λ=1, 1 and -1, which are not all distinct. Furthermore, the eigenvectors (1, 0, 0), (0, 1, 0) and (0, 0, 1) of A form a basis of R<sup>3</sup>. Hence A is a diagonalizable matrix as it is similar to the matrix 
$$
\begin{aligned}
&\hspace{-3cm} \text{D= } \begin{pmatrix} 1 & 0 & 0 \\\ 0 & -1 & 0 \\\ 0 & 0 & 1 \end{pmatrix}.
\end{aligned}
$$
##### Remark: <br> 
Thus it may be noted that the eigenvalues of a matrix may not be distinct but the matrix is diagonalizable.

