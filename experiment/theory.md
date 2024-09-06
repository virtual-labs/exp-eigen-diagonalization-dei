Matrices considered in this experiment have real entries. An n×1 matrix is called a column vector. Its transpose is a 1×n matrix called a row vector and it is also an element of R<sup>n</sup>. These are used interchangeably as and when needed.
#### 1. Characteristic polynomial and characteristic equation of a matrix:
The characteristic polynomial of a matrix A of order n×n is defined as |A-λI|, where λ&isin;R, I is the identity matrix and |A-λI| denotes the determinant of (A-λI). Clearly, degree of the characteristic polynomial is n. Characteristic polynomial of A is denoted by f(λ). The equation f(λ)=0, i.e. |A-λI|=0 is called the characteristic equation.

#### 2. Eigenvalues and eigenvectors of a matrix: 
Let A be a matrix of order n×n. Then λ&isin;R is called an eigenvalue of A, if there exists a column vector i.e. an n×1matrix X≠0 such that AX=λX and X is called an eigenvector corresponding to the eigenvalue λ.

#### 3. Examples:

$$
\begin{aligned}
\text{i.) Let } A = \begin{pmatrix} 1a & 1b \\\ 2a & 2b \end{pmatrix}. & \\
\text{To find the eigenvalues of } A, \text{ consider the characteristic equation } |A - \lambda I| = 0, \text{ i.e.,}
\left| \begin{pmatrix} 1 & 8 \\ 1 & 3 \end{pmatrix} - \begin{pmatrix} \lambda & 0 \\ 0 & \lambda \end{pmatrix} \right| = 0. \\
\text{This gives } (1 - \lambda)(3 - \lambda) - 8 = 0, \text{ which implies } \lambda = 5 \text{ and } -1.
\text{ Thus, the eigenvalues of } A \text{ are } 1 \text{ and } 3.\\
\text{To find eigenvectors of } A  \text{ for  } λ=5, \text{ consider } (A-5.I)X=0.
\text{ This gives} = \begin{pmatrix} -4 & 8 \\\ 1 & -2 \end{pmatrix}\begin{matrix} x \\\ y \end{matrix} = \begin{matrix} 0 \\\ 0 \end{matrix}.\\
\text{Thus 4x+8y=0 and x-2y=0 which implies that x=2y. So, the eigenvectors corresponding to λ=5 are (2y, y), where 0≠y&isin;R.}\\
\text{To find eigenvectors of } A  \text{ for  } λ=-1, \text{ consider } (A-(-1).I)X=0.
\text{ This gives} = \begin{pmatrix} 2 & 8 \\\ 1 & 4 \end{pmatrix}\begin{matrix} x \\\ y \end{matrix} = \begin{matrix} 0 \\\ 0 \end{matrix}.\\
\text{Thus 2x+8y=0 and x+4y=0 which implies that x=-4y. So, the eigenvector corresponding to λ=-1 are (-4y, y), where 0≠y&isin;R.}
\end{aligned}
$$

 $$\small \text{Let A= $\begin{pmatrix} 1a & 1b \\\ 2a & 2b\end{pmatrix}$. To find the eigenvalues of A, consider the characteristic equation |A-λI|=0, i.e. }
\mid
\begin{pmatrix}
1 & 8\\
1 & 3
\end{pmatrix}-\begin{pmatrix}
λ & 0\\
0 & λ
\end{pmatrix}
\mid = 0. \\\small \text{ This gives (1-λ)(3-λ)-8=0, which implies λ=5 and -1. Thus the eigenvalues of A are 1 and 3.}$$



#### 4. Eigenvalues and eigenvectors of a linear transformation: 
Let V be a finite dimensional vector space over the field R and let T: V→V be a linear transformation. Then λR is called an eigenvalue of, T if there exists xV such that x≠0 and T(x)=λx. Such an x is called an eigenvector corresponding to the eigenvalue λ.
####  5. Eigen space of a linear transformation: 
Let V be a finite dimensional vector space over the field R. Let T: V→V be a linear transformation and λR be an eigenvalue of T. Then Eλ≡{xV|T(x)=λx} is called the eigen space corresponding to λ. Clearly, Eλ consists of all the eigen vectors and the zero vector. Note that Eλ is a subspace of V.
#### 6. Finding eigenvalues and eigenvectors of a linear transformation:
Let V be a finite dimensional vector space over the field R and let T: V→V be a linear transformation. Then to find the eigenvalue and eigenvector of T, consider a matrix representation A associated to the linear transformation T w.r.t. the standard basis. Eigenvalues and eigenvectors of the matrix A are same as that of linear transformation T.
#### 7. Example:
Let T:R2→R2 be a linear transformation such that T(x, y)=(y, x), where x, yR. Then to find the eigenvalues and eigenvectors of T, consider the matrix representation given by associated to the linear transformation T w.r.t. the basis of R2. Thus the eigenvalues of T are obtained from the characteristic equation |A-λI|=0 which implies that λ=1 and -1 are the eigenvalues of T.
To find eigenvectors of T for λ=1, we solve the equation T(x, y)=(x, y) which implies that (y, x)=(x, y). Thus y=x. So, the eigenvectors corresponding to λ=1 are (x, x), where 0≠xR and eigen space is E1={(x, x), where xR}.
      To find eigenvectors of T for λ=-1, we solve the equation T(x, y)=-1(x, y), which implies that (y, x)=-1(x, y). Thus y=-x. So, the eigenvector corresponding to λ=-1 are (x, -x), where 0≠xR and its eigen space is E-1={(x, -x), where xR}.
#### 8. Properties of eigenvalue and eigenvector:
Let A be matrix of order n×n and T: Rn→Rn.
(i.) Number of eigenvalues of a matrix A is less than or equal to n. 
(ii.) If 0 is an eigenvalue of a matrix A or a linear transformation T, then the matrix A or the linear transformation T is singular.
(iii.) If x is an eigenvector of a matrix A or a linear transformation T corresponding to an eigenvalue λ, then αx, where α≠0 is also an eigenvector corresponding to the eigenvalue λ.
(iv.) If x and y are eigenvectors corresponding to an eigenvalue λ of a matrix A or a linear transformation T and -x≠y, then x+y is an eigenvector corresponding to the eigenvalue λ.
####  9. Diagonalizability:
Definition: A matrix A of order n×n is said to be diagonalizable if its eigenvectors form a basis of the vector space Rn over R. 
(i) Let A be diagonalizable such that λ1, λ2, λ3, …, λn are its eigenvalues and B={x1, x2, x3, …, xn} is a basis of Rn, where x1, x2, x3, …, xn are the corresponding eigenvectors. Let T: Rn→Rn be the linear transformation associated with the matrix A w.r.t. the standard basis of Rn. Then matrix of T w.r.t. B is the diagonal matrix D having eigenvalues λ1, λ2, λ3, …, λn as its diagonal entries. 
In such a case A and D are called similar. 
(ii) If a matrix A of order n×n has n distinct eigenvalues, then A is diagonalizable.
Note: If a matrix A of order n×n does not have n distinct eigenvalues, then A can still be diagonalizable. This is shown in the example 9(ii) below.
#### 10. Examples:
(i.) Let A=. Clearly, its eigenvalues are λ=1 and 2. Thus the matrix A of order 2×2 has 2 distinct eigenvalues, Furthermore, the eigenvectors (0, 1) and (1, 1) of A form a basis of R2. So, A is a diagonalizable matrix similar to D=. Hence the matrix A is diagonalizable.
(ii.) Let A=. Clearly, its eigenvalues are λ=1, 1 and -1, which are not all distinct. Furthermore, the eigenvectors (1, 0, 0), (0, 1, 0) and (0, 0, 1) of A form a basis of R3. So, A is a diagonalizable matrix similar to the matrix D=. Hence the matrix A is diagonalizable. Thus it may be noted that the eigenvalues of a matrix may not be distinct but the matrix is diagonalizable. 
