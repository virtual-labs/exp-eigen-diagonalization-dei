Matrices considered in this experiment have real entries. An n×1 matrix is called a column vector. Its transpose is a 1×n matrix called a row vector and it is also an element of R<sup>n</sup>. These are used interchangeably as and when needed.
#### 1. Characteristic polynomial and characteristic equation of a matrix:
The characteristic polynomial of a matrix A of order n×n is defined as |A-λI|, where λ&isin;R, I is the identity matrix and |A-λI| denotes the determinant of (A-λI). Clearly, degree of the characteristic polynomial is n. Characteristic polynomial of A is denoted by f(λ). The equation f(λ)=0, i.e. |A-λI|=0 is called the characteristic equation.

#### 2. Eigenvalues and eigenvectors of a matrix: 
Let A be a matrix of order n×n. Then λ&isin;R is called an eigenvalue of A, if there exists a column vector i.e. an n×1matrix X≠0 such that AX=λX and X is called an eigenvector corresponding to the eigenvalue λ.

#### 3. Examples:

$$
\begin{aligned}
&\hspace{-9.7cm} \text{i.) Let } A = \begin{pmatrix} 1 & 8 \\\ 1 & 3\end{pmatrix}
\end{aligned}
$$

To find the eigenvalues of A, consider the characteristic equation |A-λI|=0, This gives (1-λ)(3-λ)-8=0, which implies λ=5 and -1. Thus the eigenvalues of A are 1 and 3.<br>
To find eigenvectors of A for λ=5, consider (A-5.I)X=0. This gives

$$
\begin{pmatrix} -4 & 8 \\\ 1 & -2 \end{pmatrix} \begin{pmatrix} x \\\ y \end{pmatrix} = \begin{pmatrix} 0 \\\ 0 \end{pmatrix}
$$

Thus -4x+8y=0 and x-2y=0 which implies that x=2y. So, the eigenvectors corresponding to λ=5 are (2y, y), where 0≠y&isin;R. <br>
To find eigenvectors of A for λ=-1, consider (A-(-1).I)X=0. This gives

$$
\begin{pmatrix} 2 & 8 \\\ 1 & 4 \end{pmatrix}\begin{pmatrix} x \\\ y \end{pmatrix} = \begin{pmatrix} 0 \\\ 0 \end{pmatrix}.
$$

Thus 2x+8y=0 and x+4y=0 which implies that x=-4y. So, the eigenvector corresponding to λ=-1 are (-4y, y),where  0≠y&isin;R. <br>

$$
\begin{aligned}
&\hspace{-3cm} \text{ii.) Let } A = \begin{pmatrix} 1 & 2 & 1 \\\ 0 & 2 & 0 \\\ 0 & 1 & 2 \end{pmatrix}
\end{aligned}
$$

To find the eigenvalues of A, consider the characteristic equation |A-λI|=0. i.e. 

$$
\begin{aligned}
\mid \begin{pmatrix} 1 & 2 & 1 \\\ 0 & 2 & 0 \\\ 0 & 1 & 2 \end{pmatrix} - \begin{pmatrix} λ & 0 & 0 \\\ 0 & λ & 0 \\\ 0 & 0 & λ \end{pmatrix}  \mid= 0,
\text{ i.e. }\mid \begin{matrix} 1-λ & 2 & 1 \\\ 0 & 2-λ & 0 \\\ 0 & 1 & 2-λ \end{matrix} \mid.
\end{aligned}
$$


This gives (1-λ)(2-λ)2=0, which implies λ=1, 2 and 2. Thus the eigenvalues of A are 1, 2 and 2. <br><br>
To find eigenvectors of A for λ=1, consider (A-1.I)X=0. This gives 

$$
\begin{aligned}
\begin{pmatrix} 0 & 2 & 1 \\\ 0 & 1 & 0 \\\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} x \\\ y \\\ z \end{pmatrix} = \begin{pmatrix} 0 \\\ 0 \\\ 0 \end{pmatrix}.
\end{aligned}
$$

Thus 2y+z=0, 2y=0 and y+z=0 which imply that y=0 and z=0. So, the eigenvectors corresponding to λ=1 are (x, 0, 0), where 0≠x&isin;R. <br> <br>
To find eigenvectors of A for λ=2, consider (A-2.I)X=0. This gives 

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
&\hspace{-3cm} \text{i.) Let } A = \begin{pmatrix} 2 & 0 \\\ 1 & 1\end{pmatrix}
\end{aligned}
$$

Clearly, its eigenvalues are λ=1 and 2. Thus the matrix A of order 2×2 has 2 distinct eigenvalues, Furthermore, the eigenvectors (0, 1) and (1, 1) of A form a basis of R<sup>2</sup>. 
Hence A is a diagonalizable matrix as it is similar to 

$$
\begin{aligned}
&\hspace{-3cm} \text{D= } \begin{pmatrix} 1 & 0 \\\ 0 & 2\end{pmatrix}. \\
&\hspace{-3cm} \text{(ii.) Let A= }\begin{pmatrix} 1 & 0 & 0 \\\ 0 & 1 & 0 \\\ 0 & 0 & -1 \end{pmatrix}.
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

