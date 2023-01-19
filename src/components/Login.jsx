import styles from "./css/LoginAndSignup.module.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import React, { useState,useRef,useEffect } from "react"

const baseUrl="http://localhost:8000";


export const Login=()=>{
    const navigate=useNavigate();
    const email=useRef();
    const password=useRef();
    const [warning,setWarning]=useState();
    const [navToHome,setNavToHome]=useState();

    async function Login(){
        const emailInput=email.current.value;
        const passwordInput=password.current.value;

        await axios.post(baseUrl+"/login",{email:emailInput , password:passwordInput})
          .then(async(res)=>{
            // console.log(res.data);
            if(res.data!=="Email or password incorrect." && res.data!=="Email doesnt exist."){
                setNavToHome(res.data);
            }else{
                setWarning(res.data);
            }
          }).catch((err)=>{
            console.log(err)
          })
    }

    useEffect(()=>{
        if(navToHome){
            // console.log("res chnged")
            localStorage.setItem("token",navToHome);
            navigate("/home");
        }
    },[navToHome]);

    return(
        <div className={styles.container}>
            <div className={styles.container1}>

                <div className={styles.desc1}>
                    <svg width="274" height="19" viewBox="0 0 274 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.56 15C9.17333 14.2267 8.74667 13.4467 8.28 12.66C7.82667 11.86 7.3 11.0467 6.7 10.22C6.51333 10.46 6.27333 10.7933 5.98 11.22C5.7 11.6467 5.41333 12.1 5.12 12.58C4.84 13.06 4.57333 13.52 4.32 13.96C4.06667 14.4 3.88 14.7467 3.76 15H0.2C0.786667 13.92 1.46667 12.7867 2.24 11.6C3.02667 10.4133 3.9 9.15333 4.86 7.82L0.4 1.14H4.18L6.88 5.46L9.52 1.14H13.08L8.68 7.86C9.8 9.31333 10.74 10.66 11.5 11.9C12.26 13.1267 12.86 14.16 13.3 15H9.56ZM26.1161 8.06C26.1161 9.34 25.9294 10.4333 25.5561 11.34C25.1961 12.2467 24.6961 12.9933 24.0561 13.58C23.4294 14.1667 22.6894 14.6 21.8361 14.88C20.9828 15.1467 20.0761 15.28 19.1161 15.28C18.1961 15.28 17.3494 15.18 16.5761 14.98C15.8161 14.78 15.0561 14.4867 14.2961 14.1L15.2961 11.6C15.4828 11.68 15.7028 11.78 15.9561 11.9C16.2094 12.0067 16.4894 12.1133 16.7961 12.22C17.1161 12.3133 17.4628 12.3933 17.8361 12.46C18.2228 12.5267 18.6294 12.56 19.0561 12.56C20.1228 12.56 20.9761 12.2867 21.6161 11.74C22.2561 11.18 22.6561 10.36 22.8161 9.28H17.0161V6.64H22.7561C22.5961 5.57333 22.2028 4.78667 21.5761 4.28C20.9628 3.77333 20.1228 3.52 19.0561 3.52C18.2694 3.52 17.5494 3.62 16.8961 3.82C16.2428 4.00667 15.7294 4.19333 15.3561 4.38L14.4361 1.94C15.1961 1.54 15.9761 1.25333 16.7761 1.08C17.5894 0.893333 18.3894 0.799999 19.1761 0.799999C20.1494 0.799999 21.0561 0.946666 21.8961 1.24C22.7361 1.53333 23.4694 1.98 24.0961 2.58C24.7228 3.16667 25.2161 3.92 25.5761 4.84C25.9361 5.74667 26.1161 6.82 26.1161 8.06ZM32.8694 0.979999C34.936 0.979999 36.5227 1.34667 37.6294 2.08C38.736 2.8 39.2894 3.98667 39.2894 5.64C39.2894 7.30667 38.7294 8.51333 37.6094 9.26C36.4894 9.99333 34.8894 10.36 32.8094 10.36H31.8294V15H28.7094V1.34C29.3894 1.20667 30.1094 1.11333 30.8694 1.06C31.6294 1.00667 32.296 0.979999 32.8694 0.979999ZM33.0694 3.64C32.8427 3.64 32.616 3.64667 32.3894 3.66C32.176 3.67333 31.9894 3.68667 31.8294 3.7V7.7H32.8094C33.8894 7.7 34.7027 7.55333 35.2494 7.26C35.796 6.96667 36.0694 6.42 36.0694 5.62C36.0694 5.23333 35.996 4.91333 35.8494 4.66C35.716 4.40667 35.516 4.20667 35.2494 4.06C34.996 3.9 34.6827 3.79333 34.3094 3.74C33.936 3.67333 33.5227 3.64 33.0694 3.64ZM49.0913 15C48.7046 14.2267 48.2779 13.4467 47.8113 12.66C47.3579 11.86 46.8313 11.0467 46.2313 10.22C46.0446 10.46 45.8046 10.7933 45.5113 11.22C45.2313 11.6467 44.9446 12.1 44.6513 12.58C44.3713 13.06 44.1046 13.52 43.8513 13.96C43.5979 14.4 43.4113 14.7467 43.2913 15H39.7313C40.3179 13.92 40.9979 12.7867 41.7713 11.6C42.5579 10.4133 43.4313 9.15333 44.3913 7.82L39.9313 1.14H43.7113L46.4113 5.46L49.0513 1.14H52.6113L48.2113 7.86C49.3313 9.31333 50.2713 10.66 51.0313 11.9C51.7913 13.1267 52.3913 14.16 52.8313 15H49.0913ZM65.6473 8.06C65.6473 9.34 65.4607 10.4333 65.0873 11.34C64.7273 12.2467 64.2273 12.9933 63.5873 13.58C62.9607 14.1667 62.2207 14.6 61.3673 14.88C60.514 15.1467 59.6073 15.28 58.6473 15.28C57.7273 15.28 56.8807 15.18 56.1073 14.98C55.3473 14.78 54.5873 14.4867 53.8273 14.1L54.8273 11.6C55.014 11.68 55.234 11.78 55.4873 11.9C55.7407 12.0067 56.0207 12.1133 56.3273 12.22C56.6473 12.3133 56.994 12.3933 57.3673 12.46C57.754 12.5267 58.1607 12.56 58.5873 12.56C59.654 12.56 60.5073 12.2867 61.1473 11.74C61.7873 11.18 62.1873 10.36 62.3473 9.28H56.5473V6.64H62.2873C62.1273 5.57333 61.734 4.78667 61.1073 4.28C60.494 3.77333 59.654 3.52 58.5873 3.52C57.8007 3.52 57.0807 3.62 56.4273 3.82C55.774 4.00667 55.2607 4.19333 54.8873 4.38L53.9673 1.94C54.7273 1.54 55.5073 1.25333 56.3073 1.08C57.1207 0.893333 57.9207 0.799999 58.7073 0.799999C59.6807 0.799999 60.5873 0.946666 61.4273 1.24C62.2673 1.53333 63.0007 1.98 63.6273 2.58C64.254 3.16667 64.7473 3.92 65.1073 4.84C65.4673 5.74667 65.6473 6.82 65.6473 8.06ZM76.6006 1.14H79.7206V15H76.6006V9.12H71.3606V15H68.2406V1.14H71.3606V6.44H76.6006V1.14ZM97.0128 15C96.8661 14.52 96.6995 14.0267 96.5128 13.52C96.3395 13.0133 96.1661 12.5067 95.9928 12H90.5928C90.4195 12.5067 90.2395 13.0133 90.0528 13.52C89.8795 14.0267 89.7195 14.52 89.5728 15H86.3328C86.8528 13.5067 87.3461 12.1267 87.8128 10.86C88.2795 9.59333 88.7328 8.4 89.1728 7.28C89.6261 6.16 90.0661 5.1 90.4928 4.1C90.9328 3.08667 91.3861 2.1 91.8528 1.14H94.8328C95.2861 2.1 95.7328 3.08667 96.1728 4.1C96.6128 5.1 97.0528 6.16 97.4928 7.28C97.9461 8.4 98.4061 9.59333 98.8728 10.86C99.3395 12.1267 99.8328 13.5067 100.353 15H97.0128ZM93.2728 4.28C93.2061 4.48 93.1061 4.75333 92.9728 5.1C92.8395 5.44667 92.6861 5.84667 92.5128 6.3C92.3395 6.75333 92.1461 7.25333 91.9328 7.8C91.7328 8.34667 91.5261 8.92 91.3128 9.52H95.2528C95.0395 8.92 94.8328 8.34667 94.6328 7.8C94.4328 7.25333 94.2395 6.75333 94.0528 6.3C93.8795 5.84667 93.7261 5.44667 93.5928 5.1C93.4595 4.75333 93.3528 4.48 93.2728 4.28ZM101.235 15C101.622 14.32 102.035 13.64 102.475 12.96C102.915 12.28 103.362 11.6267 103.815 11C104.282 10.36 104.755 9.76667 105.235 9.22C105.728 8.66 106.222 8.16 106.715 7.72C106.155 7.14667 105.635 6.58667 105.155 6.04C104.675 5.49333 104.215 4.95333 103.775 4.42C103.348 3.88667 102.928 3.35333 102.515 2.82C102.102 2.27333 101.682 1.71333 101.255 1.14H105.015C105.415 1.7 105.788 2.21333 106.135 2.68C106.495 3.14667 106.842 3.6 107.175 4.04C107.522 4.48 107.868 4.91333 108.215 5.34C108.562 5.76667 108.935 6.22 109.335 6.7V1.14H112.375V6.7C112.775 6.20667 113.155 5.74 113.515 5.3C113.888 4.84667 114.248 4.4 114.595 3.96C114.942 3.52 115.288 3.07333 115.635 2.62C115.982 2.15333 116.335 1.66 116.695 1.14H120.435C119.955 1.76667 119.502 2.35333 119.075 2.9C118.662 3.44667 118.242 3.98 117.815 4.5C117.388 5.02 116.948 5.54 116.495 6.06C116.055 6.58 115.568 7.12667 115.035 7.7C116.115 8.7 117.102 9.82667 117.995 11.08C118.888 12.32 119.722 13.6267 120.495 15H117.015C116.602 14.3733 116.215 13.7933 115.855 13.26C115.495 12.7267 115.135 12.2133 114.775 11.72C114.415 11.2267 114.042 10.7467 113.655 10.28C113.268 9.8 112.842 9.30667 112.375 8.8V15H109.335V8.8C108.855 9.36 108.422 9.88 108.035 10.36C107.648 10.84 107.275 11.32 106.915 11.8C106.568 12.28 106.215 12.78 105.855 13.3C105.495 13.8067 105.108 14.3733 104.695 15H101.235ZM122.303 15V1.14H125.403V9.32C125.883 8.6 126.396 7.85333 126.943 7.08C127.49 6.29333 128.036 5.54 128.583 4.82C129.143 4.08667 129.69 3.4 130.223 2.76C130.756 2.12 131.243 1.58 131.683 1.14H134.223V15H131.143V5.92C129.97 7.29333 128.863 8.75333 127.823 10.3C126.783 11.8467 125.816 13.4133 124.923 15H122.303ZM143.48 3.78C143.44 4.67333 143.387 5.57333 143.32 6.48C143.267 7.37333 143.16 8.24 143 9.08C142.854 9.92 142.634 10.7067 142.34 11.44C142.06 12.1733 141.667 12.82 141.16 13.38C140.667 13.94 140.047 14.3867 139.3 14.72C138.554 15.0533 137.64 15.24 136.56 15.28L136.22 12.56C137.18 12.4533 137.92 12.2133 138.44 11.84C138.96 11.4533 139.354 10.8667 139.62 10.08C139.954 9.10667 140.187 7.85333 140.32 6.32C140.467 4.77333 140.54 3.04667 140.54 1.14H150V15H146.88V3.78H143.48ZM159.262 3.78C159.222 4.67333 159.168 5.57333 159.102 6.48C159.048 7.37333 158.942 8.24 158.782 9.08C158.635 9.92 158.415 10.7067 158.122 11.44C157.842 12.1733 157.448 12.82 156.942 13.38C156.448 13.94 155.828 14.3867 155.082 14.72C154.335 15.0533 153.422 15.24 152.342 15.28L152.002 12.56C152.962 12.4533 153.702 12.2133 154.222 11.84C154.742 11.4533 155.135 10.8667 155.402 10.08C155.735 9.10667 155.968 7.85333 156.102 6.32C156.248 4.77333 156.322 3.04667 156.322 1.14H165.782V15H162.662V3.78H159.262ZM178.263 15C178.116 14.52 177.949 14.0267 177.763 13.52C177.589 13.0133 177.416 12.5067 177.243 12H171.843C171.669 12.5067 171.489 13.0133 171.303 13.52C171.129 14.0267 170.969 14.52 170.823 15H167.583C168.103 13.5067 168.596 12.1267 169.063 10.86C169.529 9.59333 169.983 8.4 170.423 7.28C170.876 6.16 171.316 5.1 171.743 4.1C172.183 3.08667 172.636 2.1 173.103 1.14H176.083C176.536 2.1 176.983 3.08667 177.423 4.1C177.863 5.1 178.303 6.16 178.743 7.28C179.196 8.4 179.656 9.59333 180.123 10.86C180.589 12.1267 181.083 13.5067 181.603 15H178.263ZM174.523 4.28C174.456 4.48 174.356 4.75333 174.223 5.1C174.089 5.44667 173.936 5.84667 173.763 6.3C173.589 6.75333 173.396 7.25333 173.183 7.8C172.983 8.34667 172.776 8.92 172.563 9.52H176.503C176.289 8.92 176.083 8.34667 175.883 7.8C175.683 7.25333 175.489 6.75333 175.303 6.3C175.129 5.84667 174.976 5.44667 174.843 5.1C174.709 4.75333 174.603 4.48 174.523 4.28ZM182.568 12.36H184.568C185.061 11.5067 185.448 10.66 185.728 9.82C186.008 8.98 186.215 8.12667 186.348 7.26C186.495 6.39333 186.581 5.5 186.608 4.58C186.648 3.66 186.668 2.69333 186.668 1.68V1.14H195.828V12.36H198.208V18.7H195.208V15H185.568V18.7H182.568V12.36ZM189.608 3.78C189.581 4.5 189.535 5.24 189.468 6C189.401 6.76 189.301 7.51333 189.168 8.26C189.035 8.99333 188.855 9.71333 188.628 10.42C188.415 11.1133 188.141 11.76 187.808 12.36H192.788V3.78H189.608ZM209.864 15C209.718 14.52 209.551 14.0267 209.364 13.52C209.191 13.0133 209.018 12.5067 208.844 12H203.444C203.271 12.5067 203.091 13.0133 202.904 13.52C202.731 14.0267 202.571 14.52 202.424 15H199.184C199.704 13.5067 200.198 12.1267 200.664 10.86C201.131 9.59333 201.584 8.4 202.024 7.28C202.478 6.16 202.918 5.1 203.344 4.1C203.784 3.08667 204.238 2.1 204.704 1.14H207.684C208.138 2.1 208.584 3.08667 209.024 4.1C209.464 5.1 209.904 6.16 210.344 7.28C210.798 8.4 211.258 9.59333 211.724 10.86C212.191 12.1267 212.684 13.5067 213.204 15H209.864ZM206.124 4.28C206.058 4.48 205.958 4.75333 205.824 5.1C205.691 5.44667 205.538 5.84667 205.364 6.3C205.191 6.75333 204.998 7.25333 204.784 7.8C204.584 8.34667 204.378 8.92 204.164 9.52H208.104C207.891 8.92 207.684 8.34667 207.484 7.8C207.284 7.25333 207.091 6.75333 206.904 6.3C206.731 5.84667 206.578 5.44667 206.444 5.1C206.311 4.75333 206.204 4.48 206.124 4.28ZM214.087 15C214.473 14.32 214.887 13.64 215.327 12.96C215.767 12.28 216.213 11.6267 216.667 11C217.133 10.36 217.607 9.76667 218.087 9.22C218.58 8.66 219.073 8.16 219.567 7.72C219.007 7.14667 218.487 6.58667 218.007 6.04C217.527 5.49333 217.067 4.95333 216.627 4.42C216.2 3.88667 215.78 3.35333 215.367 2.82C214.953 2.27333 214.533 1.71333 214.107 1.14H217.867C218.267 1.7 218.64 2.21333 218.987 2.68C219.347 3.14667 219.693 3.6 220.027 4.04C220.373 4.48 220.72 4.91333 221.067 5.34C221.413 5.76667 221.787 6.22 222.187 6.7V1.14H225.227V6.7C225.627 6.20667 226.007 5.74 226.367 5.3C226.74 4.84667 227.1 4.4 227.447 3.96C227.793 3.52 228.14 3.07333 228.487 2.62C228.833 2.15333 229.187 1.66 229.547 1.14H233.287C232.807 1.76667 232.353 2.35333 231.927 2.9C231.513 3.44667 231.093 3.98 230.667 4.5C230.24 5.02 229.8 5.54 229.347 6.06C228.907 6.58 228.42 7.12667 227.887 7.7C228.967 8.7 229.953 9.82667 230.847 11.08C231.74 12.32 232.573 13.6267 233.347 15H229.867C229.453 14.3733 229.067 13.7933 228.707 13.26C228.347 12.7267 227.987 12.2133 227.627 11.72C227.267 11.2267 226.893 10.7467 226.507 10.28C226.12 9.8 225.693 9.30667 225.227 8.8V15H222.187V8.8C221.707 9.36 221.273 9.88 220.887 10.36C220.5 10.84 220.127 11.32 219.767 11.8C219.42 12.28 219.067 12.78 218.707 13.3C218.347 13.8067 217.96 14.3733 217.547 15H214.087ZM244.579 15.18C243.819 15.18 243.059 15.1533 242.299 15.1C241.553 15.06 240.773 14.9533 239.959 14.78V1.34C240.599 1.22 241.299 1.13333 242.059 1.08C242.819 1.01333 243.526 0.979999 244.179 0.979999C245.059 0.979999 245.866 1.04667 246.599 1.18C247.346 1.3 247.986 1.51333 248.519 1.82C249.053 2.12667 249.466 2.53333 249.759 3.04C250.066 3.53333 250.219 4.14667 250.219 4.88C250.219 5.98667 249.686 6.86 248.619 7.5C249.499 7.83333 250.099 8.28667 250.419 8.86C250.739 9.43333 250.899 10.08 250.899 10.8C250.899 12.2533 250.366 13.3467 249.299 14.08C248.246 14.8133 246.673 15.18 244.579 15.18ZM242.999 8.96V12.54C243.226 12.5667 243.473 12.5867 243.739 12.6C244.006 12.6133 244.299 12.62 244.619 12.62C245.553 12.62 246.306 12.4867 246.879 12.22C247.453 11.9533 247.739 11.46 247.739 10.74C247.739 10.1 247.499 9.64667 247.019 9.38C246.539 9.1 245.853 8.96 244.959 8.96H242.999ZM242.999 6.58H244.519C245.479 6.58 246.166 6.46 246.579 6.22C246.993 5.96667 247.199 5.56667 247.199 5.02C247.199 4.46 246.986 4.06667 246.559 3.84C246.133 3.61333 245.506 3.5 244.679 3.5C244.413 3.5 244.126 3.50667 243.819 3.52C243.513 3.52 243.239 3.53333 242.999 3.56V6.58ZM264.202 8.06C264.202 9.34 264.015 10.4333 263.642 11.34C263.282 12.2467 262.782 12.9933 262.142 13.58C261.515 14.1667 260.775 14.6 259.922 14.88C259.069 15.1467 258.162 15.28 257.202 15.28C256.282 15.28 255.435 15.18 254.662 14.98C253.902 14.78 253.142 14.4867 252.382 14.1L253.382 11.6C253.569 11.68 253.789 11.78 254.042 11.9C254.295 12.0067 254.575 12.1133 254.882 12.22C255.202 12.3133 255.549 12.3933 255.922 12.46C256.309 12.5267 256.715 12.56 257.142 12.56C258.209 12.56 259.062 12.2867 259.702 11.74C260.342 11.18 260.742 10.36 260.902 9.28H255.102V6.64H260.842C260.682 5.57333 260.289 4.78667 259.662 4.28C259.049 3.77333 258.209 3.52 257.142 3.52C256.355 3.52 255.635 3.62 254.982 3.82C254.329 4.00667 253.815 4.19333 253.442 4.38L252.522 1.94C253.282 1.54 254.062 1.25333 254.862 1.08C255.675 0.893333 256.475 0.799999 257.262 0.799999C258.235 0.799999 259.142 0.946666 259.982 1.24C260.822 1.53333 261.555 1.98 262.182 2.58C262.809 3.16667 263.302 3.92 263.662 4.84C264.022 5.74667 264.202 6.82 264.202 8.06ZM268.844 3.36C268.364 3.36 267.911 3.42 267.484 3.54C267.058 3.66 266.584 3.85333 266.064 4.12L265.224 1.86C265.744 1.52667 266.358 1.27333 267.064 1.1C267.771 0.913332 268.464 0.819999 269.144 0.819999C269.998 0.819999 270.698 0.933332 271.244 1.16C271.804 1.38667 272.244 1.67333 272.564 2.02C272.884 2.36667 273.104 2.74667 273.224 3.16C273.358 3.57333 273.424 3.96667 273.424 4.34C273.424 4.71333 273.364 5.06 273.244 5.38C273.138 5.68667 272.998 5.97333 272.824 6.24C272.651 6.50667 272.451 6.76 272.224 7C271.998 7.24 271.778 7.46667 271.564 7.68C271.404 7.84 271.238 8.01333 271.064 8.2C270.891 8.37333 270.731 8.56 270.584 8.76C270.451 8.96 270.338 9.17333 270.244 9.4C270.151 9.61333 270.104 9.83333 270.104 10.06C270.104 10.1133 270.104 10.1933 270.104 10.3C270.104 10.4067 270.111 10.5 270.124 10.58H267.484C267.458 10.4467 267.438 10.3 267.424 10.14C267.424 9.96667 267.424 9.82 267.424 9.7C267.424 9.32667 267.471 8.99333 267.564 8.7C267.658 8.39333 267.778 8.11333 267.924 7.86C268.084 7.59333 268.264 7.34667 268.464 7.12C268.664 6.89333 268.871 6.67333 269.084 6.46C269.391 6.15333 269.671 5.85333 269.924 5.56C270.178 5.25333 270.304 4.90667 270.304 4.52C270.304 4.2 270.178 3.92667 269.924 3.7C269.684 3.47333 269.324 3.36 268.844 3.36ZM270.704 13.42C270.704 14.0067 270.511 14.46 270.124 14.78C269.751 15.1 269.324 15.26 268.844 15.26C268.364 15.26 267.931 15.1 267.544 14.78C267.171 14.46 266.984 14.0067 266.984 13.42C266.984 12.8333 267.171 12.38 267.544 12.06C267.931 11.74 268.364 11.58 268.844 11.58C269.324 11.58 269.751 11.74 270.124 12.06C270.511 12.38 270.704 12.8333 270.704 13.42Z" fill="#02B589"/>
                    </svg>
                </div>

                <div className={styles.logo1}>
                    <svg width="184" height="118" viewBox="0 0 184 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M78.499 20.0026C78.499 20.8865 78.8526 21.7343 79.4819 22.3593C80.1113 22.9843 80.9649 23.3354 81.8549 23.3354H101.99C102.88 23.3354 103.734 22.9843 104.363 22.3593C104.993 21.7343 105.346 20.8865 105.346 20.0026C105.346 19.1187 104.993 18.271 104.363 17.646C103.734 17.021 102.88 16.6699 101.99 16.6699H81.8549C80.9649 16.6699 80.1113 17.021 79.4819 17.646C78.8526 18.271 78.499 19.1187 78.499 20.0026Z" fill="#02B589"/>
                    <path d="M81.8549 33.3342H75.8478C72.3991 33.4256 69.04 32.2365 66.4272 29.9992C63.8145 27.7619 62.1358 24.6373 61.7193 21.2362C61.5461 19.3847 61.7649 17.5177 62.3615 15.7552C62.9581 13.9927 63.9194 12.3736 65.1836 11.0019C66.4478 9.63031 67.9869 8.53651 69.7021 7.79081C71.4173 7.0451 73.2707 6.66399 75.143 6.67197H81.8549C82.7449 6.67197 83.5985 6.32084 84.2279 5.69582C84.8572 5.0708 85.2108 4.2231 85.2108 3.33919C85.2108 2.45528 84.8572 1.60758 84.2279 0.982558C83.5985 0.357541 82.7449 0.00640916 81.8549 0.00640916H75.8478C70.8734 -0.0596071 66.0423 1.66097 62.2439 4.85146C58.4454 8.04195 55.9352 12.4876 55.1753 17.3702C54.7976 20.1944 55.0319 23.0661 55.8625 25.7931C56.6932 28.52 58.101 31.0392 59.9917 33.182C61.8823 35.3247 64.2122 37.0414 66.8253 38.2173C69.4384 39.3931 72.2742 40.0008 75.143 39.9998H81.8549C82.7449 39.9998 83.5985 39.6486 84.2279 39.0236C84.8572 38.3986 85.2108 37.5509 85.2108 36.667C85.2108 35.7831 84.8572 34.9354 84.2279 34.3103C83.5985 33.6853 82.7449 33.3342 81.8549 33.3342Z" fill="#02B589"/>
                    <path d="M128.838 17.4698C128.087 12.5256 125.546 8.02345 121.69 4.80808C117.835 1.59271 112.93 -0.114796 107.897 0.00599704H102.829C100.111 0.00599704 98.6345 1.50575 98.6345 3.33878C98.6345 4.22268 98.9881 5.07039 99.6175 5.69541C100.247 6.32042 101.1 6.67156 101.99 6.67156H107.998C111.446 6.58014 114.805 7.76931 117.418 10.0066C120.031 12.2439 121.71 15.3685 122.126 18.7695C122.299 20.621 122.08 22.488 121.484 24.2506C120.887 26.0131 119.926 27.6322 118.662 29.0038C117.398 30.3754 115.858 31.4692 114.143 32.215C112.428 32.9607 110.575 33.3418 108.702 33.3338H101.99C101.1 33.3338 100.247 33.6849 99.6175 34.3099C98.9881 34.935 98.6345 35.7827 98.6345 36.6666C98.6345 37.5505 98.9881 38.3982 99.6175 39.0232C100.247 39.6482 101.1 39.9994 101.99 39.9994H108.702C111.576 40.0223 114.42 39.4344 117.046 38.275C119.671 37.1156 122.017 35.4115 123.924 33.2774C125.831 31.1433 127.257 28.6285 128.104 25.9019C128.952 23.1754 129.202 20.3003 128.838 17.4698Z" fill="#02B589"/>
                    <path d="M21.6876 104.952C20.1943 104.952 18.8876 104.635 17.7676 104C16.685 103.403 16.1436 102.339 16.1436 100.808C16.1436 99.8373 16.3863 98.7547 16.8716 97.56C17.5436 98.3067 18.1596 98.8293 18.7196 99.128C19.317 99.4267 19.9516 99.576 20.6236 99.576C22.4903 99.576 23.8716 98.5307 24.7676 96.44C25.701 94.3493 26.1676 92.0347 26.1676 89.496C26.1676 84.7547 24.3943 82.384 20.8476 82.384C19.8396 82.384 18.981 82.44 18.2716 82.552L13.6796 104H5.61563L13.2316 68.384L21.5196 67.264L18.8876 79.696H19.2236C20.6423 79.696 21.9676 79.248 23.1996 78.352C24.4316 77.4187 25.421 76.2613 26.1676 74.88C26.9143 73.4613 27.2876 72.0427 27.2876 70.624C27.2876 68.9067 26.6716 67.4693 25.4396 66.312C24.245 65.1547 22.397 64.576 19.8956 64.576C17.6183 64.576 15.397 65.0987 13.2316 66.144C11.0663 67.152 9.29296 68.6827 7.91163 70.736C6.56763 72.7893 5.89563 75.272 5.89563 78.184C5.89563 79.5653 6.02629 80.536 6.28763 81.096C6.54896 81.6187 6.67963 81.9173 6.67963 81.992C4.70096 81.992 3.20763 81.6 2.19963 80.816C1.19163 79.9947 0.687625 78.6693 0.687625 76.84C0.687625 74.3013 1.63963 71.8933 3.54363 69.616C5.44763 67.3387 7.96763 65.5093 11.1036 64.128C14.2396 62.7093 17.5436 62 21.0156 62C23.629 62 25.8316 62.4107 27.6236 63.232C29.4156 64.0533 30.741 65.136 31.5996 66.48C32.4956 67.824 32.9436 69.2987 32.9436 70.904C32.9436 72.6213 32.4583 74.2827 31.4876 75.888C30.517 77.4933 29.1356 78.8 27.3436 79.808C29.5836 80.2187 31.245 81.264 32.3276 82.944C33.4103 84.5867 33.9516 86.5467 33.9516 88.824C33.9516 90.952 33.541 93.2667 32.7196 95.768C31.9356 98.2693 30.6103 100.435 28.7436 102.264C26.9143 104.056 24.5623 104.952 21.6876 104.952ZM44.0666 104.224C41.304 104.224 39.12 103.515 37.5146 102.096C35.9093 100.677 35.1066 98.4373 35.1066 95.376C35.1066 92.8373 35.6293 90.0187 36.6746 86.92C37.72 83.8213 39.4 81.152 41.7146 78.912C44.0293 76.6347 46.9413 75.496 50.4506 75.496C55.2293 75.496 57.6186 78.4827 57.6186 84.456V84.512C57.7306 84.5493 57.936 84.568 58.2346 84.568C59.4666 84.568 60.8853 84.2507 62.4906 83.616C64.096 82.944 65.552 82.1413 66.8586 81.208L67.3626 82.72C66.28 83.8773 64.8613 84.8667 63.1066 85.688C61.3893 86.472 59.504 87.032 57.4506 87.368C57.152 90.7653 56.3866 93.7333 55.1546 96.272C53.9226 98.8107 52.336 100.771 50.3946 102.152C48.4533 103.533 46.344 104.224 44.0666 104.224ZM46.3066 99.184C47.2026 99.184 48.0986 98.68 48.9946 97.672C49.8906 96.6267 50.6746 95.2267 51.3466 93.472C52.0186 91.68 52.504 89.7013 52.8026 87.536C51.7946 87.312 51.2906 86.528 51.2906 85.184C51.2906 83.6533 51.8693 82.6453 53.0266 82.16C52.952 80.928 52.7653 80.088 52.4666 79.64C52.168 79.1547 51.6453 78.912 50.8986 78.912C49.6666 78.912 48.472 79.808 47.3146 81.6C46.1573 83.392 45.224 85.5387 44.5146 88.04C43.8053 90.5413 43.4506 92.744 43.4506 94.648C43.4506 96.44 43.656 97.6533 44.0666 98.288C44.4773 98.8853 45.224 99.184 46.3066 99.184ZM70.412 118C68.62 118 67.1267 117.533 65.932 116.6C64.7373 115.667 64.14 114.323 64.14 112.568C64.14 110.44 64.9987 108.723 66.716 107.416C68.4333 106.147 70.6173 105.083 73.268 104.224L73.94 101.256C72.036 103.309 69.796 104.336 67.22 104.336C65.092 104.336 63.3187 103.608 61.9 102.152C60.4813 100.696 59.772 98.4187 59.772 95.32C59.772 92.5573 60.3133 89.664 61.396 86.64C62.516 83.5787 64.1587 81.0027 66.324 78.912C68.5267 76.784 71.14 75.72 74.164 75.72C75.6947 75.72 76.8333 75.9813 77.58 76.504C78.3267 77.0267 78.7 77.7173 78.7 78.576V78.912L79.316 76H87.38L81.836 101.984C83.628 101.387 85.0653 100.491 86.148 99.296C87.2307 98.1013 88.1453 96.328 88.892 93.976H91.244C90.236 97.2987 88.8733 99.744 87.156 101.312C85.4387 102.843 83.4973 103.888 81.332 104.448L80.492 108.48C79.7453 112.101 78.4573 114.584 76.628 115.928C74.7987 117.309 72.7267 118 70.412 118ZM70.86 98.904C71.7187 98.904 72.596 98.512 73.492 97.728C74.388 96.944 75.004 95.88 75.34 94.536L78.196 81.264C78.196 80.816 78.0093 80.368 77.636 79.92C77.2627 79.4347 76.684 79.192 75.9 79.192C74.4067 79.192 73.0627 80.0693 71.868 81.824C70.6733 83.5413 69.74 85.632 69.068 88.096C68.396 90.5227 68.06 92.6693 68.06 94.536C68.06 96.4027 68.3213 97.5973 68.844 98.12C69.404 98.6427 70.076 98.904 70.86 98.904ZM69.124 113.632C69.7587 113.632 70.3747 113.203 70.972 112.344C71.5693 111.485 72.036 110.253 72.372 108.648L72.708 107.024C69.0493 108.368 67.22 109.955 67.22 111.784C67.22 112.269 67.388 112.699 67.724 113.072C68.06 113.445 68.5267 113.632 69.124 113.632ZM98.2348 72.976C97.0028 72.976 95.9575 72.5467 95.0988 71.688C94.2401 70.8293 93.8108 69.784 93.8108 68.552C93.8108 67.32 94.2401 66.2747 95.0988 65.416C95.9575 64.52 97.0028 64.072 98.2348 64.072C99.4668 64.072 100.512 64.52 101.371 65.416C102.267 66.2747 102.715 67.32 102.715 68.552C102.715 69.784 102.267 70.8293 101.371 71.688C100.512 72.5467 99.4668 72.976 98.2348 72.976ZM94.4268 104.336C92.6348 104.336 91.1788 103.776 90.0588 102.656C88.9761 101.536 88.4348 99.856 88.4348 97.616C88.4348 96.6827 88.5841 95.4693 88.8828 93.976L92.6908 76H100.755L96.7228 95.04C96.5735 95.6 96.4988 96.1973 96.4988 96.832C96.4988 97.5787 96.6668 98.12 97.0028 98.456C97.3761 98.7547 97.9735 98.904 98.7948 98.904C99.8775 98.904 100.885 98.456 101.819 97.56C102.752 96.6267 103.424 95.432 103.835 93.976H106.187C104.805 98.008 103.032 100.752 100.867 102.208C98.7015 103.627 96.5548 104.336 94.4268 104.336ZM124.029 104.336C121.751 104.336 120.071 103.739 118.989 102.544C117.943 101.312 117.421 99.8 117.421 98.008C117.421 97.224 117.514 96.3467 117.701 95.376C117.887 94.368 118.074 93.3973 118.261 92.464C118.485 91.5307 118.634 90.9333 118.709 90.672C119.007 89.3653 119.287 88.0773 119.549 86.808C119.81 85.5387 119.941 84.512 119.941 83.728C119.941 81.824 119.269 80.872 117.925 80.872C116.954 80.872 116.095 81.3573 115.349 82.328C114.602 83.2613 114.005 84.4933 113.557 86.024L109.749 104H101.684L107.621 76H115.685L115.069 78.912C116.935 76.8213 119.119 75.776 121.621 75.776C123.525 75.776 125.037 76.2987 126.157 77.344C127.277 78.3893 127.837 79.976 127.837 82.104C127.837 83.1867 127.706 84.4 127.445 85.744C127.183 87.0507 126.81 88.656 126.325 90.56C126.026 91.7173 125.746 92.856 125.485 93.976C125.261 95.0587 125.149 95.9173 125.149 96.552C125.149 97.2987 125.317 97.8773 125.653 98.288C125.989 98.6987 126.567 98.904 127.389 98.904C128.509 98.904 129.405 98.512 130.077 97.728C130.749 96.9067 131.421 95.656 132.092 93.976H134.445C133.063 98.0827 131.458 100.845 129.629 102.264C127.837 103.645 125.97 104.336 124.029 104.336ZM140.262 104.224C137.499 104.224 135.315 103.515 133.71 102.096C132.105 100.677 131.302 98.4373 131.302 95.376C131.302 92.8373 131.825 90.0187 132.87 86.92C133.915 83.8213 135.595 81.152 137.91 78.912C140.225 76.6347 143.137 75.496 146.646 75.496C151.425 75.496 153.814 78.4827 153.814 84.456V84.512C153.926 84.5493 154.131 84.568 154.43 84.568C155.662 84.568 157.081 84.2507 158.686 83.616C160.291 82.944 161.747 82.1413 163.054 81.208L163.558 82.72C162.475 83.8773 161.057 84.8667 159.302 85.688C157.585 86.472 155.699 87.032 153.646 87.368C153.347 90.7653 152.582 93.7333 151.35 96.272C150.118 98.8107 148.531 100.771 146.59 102.152C144.649 103.533 142.539 104.224 140.262 104.224ZM142.502 99.184C143.398 99.184 144.294 98.68 145.19 97.672C146.086 96.6267 146.87 95.2267 147.542 93.472C148.214 91.68 148.699 89.7013 148.998 87.536C147.99 87.312 147.486 86.528 147.486 85.184C147.486 83.6533 148.065 82.6453 149.222 82.16C149.147 80.928 148.961 80.088 148.662 79.64C148.363 79.1547 147.841 78.912 147.094 78.912C145.862 78.912 144.667 79.808 143.51 81.6C142.353 83.392 141.419 85.5387 140.71 88.04C140.001 90.5413 139.646 92.744 139.646 94.648C139.646 96.44 139.851 97.6533 140.262 98.288C140.673 98.8853 141.419 99.184 142.502 99.184ZM164.871 104.224C162.109 104.224 159.925 103.515 158.319 102.096C156.714 100.677 155.911 98.4373 155.911 95.376C155.911 92.8 156.415 89.9813 157.423 86.92C158.431 83.8213 160.074 81.152 162.351 78.912C164.629 76.6347 167.541 75.496 171.087 75.496C175.493 75.496 177.863 78.016 178.199 83.056C179.021 82.8693 179.749 82.4213 180.383 81.712C181.018 80.9653 181.615 80.1253 182.175 79.192H183.967C182.959 81.208 182.063 82.7947 181.279 83.952C180.495 85.072 179.469 85.9867 178.199 86.696C177.975 90.2053 177.247 93.2853 176.015 95.936C174.821 98.5867 173.253 100.64 171.311 102.096C169.37 103.515 167.223 104.224 164.871 104.224ZM167.111 99.184C168.493 99.184 169.781 98.064 170.975 95.824C172.17 93.584 172.991 90.8213 173.439 87.536C172.543 87.2 172.095 86.36 172.095 85.016C172.095 83.56 172.618 82.5893 173.663 82.104C173.589 80.9093 173.383 80.088 173.047 79.64C172.749 79.1547 172.245 78.912 171.535 78.912C170.303 78.912 169.127 79.808 168.007 81.6C166.887 83.3547 165.973 85.5013 165.263 88.04C164.591 90.5413 164.255 92.744 164.255 94.648C164.255 96.44 164.461 97.6533 164.871 98.288C165.282 98.8853 166.029 99.184 167.111 99.184Z" fill="#02B589"/>
                    </svg>
                </div>

                <div className={styles.logo2}>
                    <svg width="128" height="29" viewBox="0 0 128 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2954 0.823999H19.2874V23H14.2954V13.592H5.91138V23H0.919375V0.823999H5.91138V9.304H14.2954V0.823999ZM37.4114 14.488C37.4114 15.9173 37.198 17.1867 36.7714 18.296C36.3447 19.4053 35.7474 20.3333 34.9794 21.08C34.2327 21.8267 33.326 22.4027 32.2594 22.808C31.214 23.192 30.0514 23.384 28.7714 23.384C27.7047 23.384 26.702 23.3093 25.7634 23.16C24.846 23.0107 23.854 22.7333 22.7874 22.328L23.6834 18.584C24.302 18.7973 25.0274 18.9893 25.8594 19.16C26.6914 19.3307 27.4807 19.416 28.2274 19.416C28.7607 19.416 29.2727 19.3627 29.7634 19.256C30.254 19.1493 30.6914 18.968 31.0754 18.712C31.4807 18.456 31.8114 18.1253 32.0674 17.72C32.3447 17.2933 32.526 16.7813 32.6114 16.184H26.2114V12.76H32.5794C32.4087 11.5653 31.9394 10.744 31.1714 10.296C30.4247 9.848 29.5074 9.624 28.4194 9.624C27.6087 9.624 26.8727 9.69867 26.2114 9.848C25.5714 9.976 24.8994 10.1467 24.1954 10.36L23.2994 6.68C24.2594 6.33867 25.1874 6.09333 26.0834 5.944C26.9794 5.79467 27.8434 5.72 28.6754 5.72C29.9767 5.72 31.1607 5.92267 32.2274 6.328C33.294 6.712 34.2114 7.288 34.9794 8.056C35.7474 8.80267 36.3447 9.72 36.7714 10.808C37.198 11.896 37.4114 13.1227 37.4114 14.488ZM45.5549 19.48C45.8535 19.5227 46.2482 19.5653 46.7389 19.608C47.2509 19.6293 47.7202 19.64 48.1469 19.64C49.2135 19.64 50.0455 19.512 50.6429 19.256C51.2402 18.9787 51.5389 18.488 51.5389 17.784C51.5389 17.1013 51.2615 16.632 50.7069 16.376C50.1735 16.0987 49.3842 15.96 48.3389 15.96H45.5549V19.48ZM48.2429 12.76C49.0322 12.76 49.6722 12.664 50.1629 12.472C50.6535 12.2587 50.8989 11.8107 50.8989 11.128C50.8989 10.488 50.6215 10.0507 50.0669 9.816C49.5122 9.58133 48.7869 9.464 47.8909 9.464C47.5922 9.464 47.1975 9.48533 46.7069 9.528C46.2375 9.54933 45.8535 9.58133 45.5549 9.624V12.76H48.2429ZM48.0829 23.32C47.4855 23.32 46.8455 23.2987 46.1629 23.256C45.4802 23.2133 44.8082 23.1493 44.1469 23.064C43.4855 23 42.8562 22.9253 42.2589 22.84C41.6829 22.7333 41.1922 22.6373 40.7869 22.552V6.424C41.1922 6.33867 41.6829 6.264 42.2589 6.2C42.8562 6.11467 43.4855 6.04 44.1469 5.976C44.8082 5.912 45.4802 5.86933 46.1629 5.848C46.8455 5.80533 47.4855 5.784 48.0829 5.784C49.4695 5.784 50.6322 5.92267 51.5709 6.2C52.5309 6.47733 53.2989 6.84 53.8749 7.288C54.4722 7.736 54.8989 8.23733 55.1549 8.792C55.4109 9.34667 55.5389 9.90133 55.5389 10.456C55.5389 11.2027 55.3575 11.8853 54.9949 12.504C54.6322 13.1227 54.1735 13.5707 53.6189 13.848C53.9175 13.976 54.2162 14.1573 54.5149 14.392C54.8349 14.6267 55.1229 14.9147 55.3789 15.256C55.6349 15.576 55.8375 15.9707 55.9869 16.44C56.1575 16.888 56.2429 17.4107 56.2429 18.008C56.2429 18.6907 56.1042 19.352 55.8269 19.992C55.5709 20.632 55.1229 21.1973 54.4829 21.688C53.8429 22.1787 53.0002 22.5733 51.9549 22.872C50.9095 23.1707 49.6189 23.32 48.0829 23.32ZM73.8319 10.072H68.4559V23H63.6879V10.072H58.3119V6.168H73.8319V10.072ZM87.5084 14.712C87.5084 13.24 87.1777 12.0667 86.5164 11.192C85.855 10.296 84.8737 9.848 83.5724 9.848C83.1457 9.848 82.751 9.86933 82.3884 9.912C82.0257 9.93333 81.727 9.96533 81.4924 10.008V18.616C81.791 18.808 82.175 18.968 82.6444 19.096C83.135 19.224 83.6257 19.288 84.1164 19.288C86.3777 19.288 87.5084 17.7627 87.5084 14.712ZM92.3724 14.584C92.3724 15.8853 92.2124 17.0693 91.8924 18.136C91.5724 19.2027 91.103 20.12 90.4844 20.888C89.8657 21.656 89.0977 22.2533 88.1804 22.68C87.263 23.1067 86.207 23.32 85.0124 23.32C84.351 23.32 83.7324 23.256 83.1564 23.128C82.5804 23 82.0257 22.8187 81.4924 22.584V28.92H76.7244V6.744C77.151 6.616 77.6417 6.49867 78.1964 6.392C78.751 6.264 79.327 6.15733 79.9244 6.072C80.543 5.98667 81.1617 5.92267 81.7804 5.88C82.4204 5.816 83.0284 5.784 83.6044 5.784C84.991 5.784 86.2284 5.99733 87.3164 6.424C88.4044 6.82933 89.3217 7.416 90.0684 8.184C90.815 8.93067 91.3804 9.848 91.7644 10.936C92.1697 12.024 92.3724 13.24 92.3724 14.584ZM109.349 14.488C109.349 15.9173 109.136 17.1867 108.709 18.296C108.282 19.4053 107.685 20.3333 106.917 21.08C106.17 21.8267 105.264 22.4027 104.197 22.808C103.152 23.192 101.989 23.384 100.709 23.384C99.6422 23.384 98.6395 23.3093 97.7009 23.16C96.7835 23.0107 95.7915 22.7333 94.7249 22.328L95.6209 18.584C96.2395 18.7973 96.9649 18.9893 97.7969 19.16C98.6289 19.3307 99.4182 19.416 100.165 19.416C100.698 19.416 101.21 19.3627 101.701 19.256C102.192 19.1493 102.629 18.968 103.013 18.712C103.418 18.456 103.749 18.1253 104.005 17.72C104.282 17.2933 104.464 16.7813 104.549 16.184H98.1489V12.76H104.517C104.346 11.5653 103.877 10.744 103.109 10.296C102.362 9.848 101.445 9.624 100.357 9.624C99.5462 9.624 98.8102 9.69867 98.1489 9.848C97.5089 9.976 96.8369 10.1467 96.1329 10.36L95.2369 6.68C96.1969 6.33867 97.1249 6.09333 98.0209 5.944C98.9169 5.79467 99.7809 5.72 100.613 5.72C101.914 5.72 103.098 5.92267 104.165 6.328C105.232 6.712 106.149 7.288 106.917 8.056C107.685 8.80267 108.282 9.72 108.709 10.808C109.136 11.896 109.349 13.1227 109.349 14.488ZM118.85 11.288L122.178 6.168H127.106L121.346 14.264C122.626 15.864 123.789 17.4213 124.834 18.936C125.879 20.4507 126.711 21.8053 127.33 23H122.21C122.039 22.68 121.826 22.2853 121.57 21.816C121.314 21.3253 121.026 20.824 120.706 20.312C120.386 19.7787 120.045 19.256 119.682 18.744C119.341 18.2107 118.999 17.7307 118.658 17.304C118.338 17.7093 118.007 18.1573 117.666 18.648C117.346 19.1387 117.037 19.64 116.738 20.152C116.439 20.6427 116.141 21.1333 115.842 21.624C115.565 22.1147 115.319 22.5733 115.106 23H110.242C110.498 22.4667 110.85 21.8373 111.298 21.112C111.746 20.3867 112.226 19.64 112.738 18.872C113.271 18.0827 113.826 17.304 114.402 16.536C114.978 15.7467 115.543 15.0107 116.098 14.328C115.138 12.984 114.178 11.6293 113.218 10.264C112.258 8.87733 111.309 7.512 110.37 6.168H115.522L118.85 11.288Z" fill="#02B589"/>
                    </svg>
                </div>   

                <div>
                    <p>Email:</p>
                    <input ref={email} placeholder="Email"/>
                </div>

                <div>
                    <p>Password:</p>
                    <input ref={password} placeholder="Password"/>
                </div>

                <p style={{margin:"10px" , color:"red"}}>{warning}</p>

                <div className={styles.form}>
                    <input type="checkbox"/>
                    <p style={{display:"inline-block" , color:"#02B589"}}>Remember me</p>

                    <a style={{textDecoration:"underline" , marginLeft:"20px"}}>Forgot password?</a>
                </div>

                <div className={styles.form}>
                    <button onClick={Login}>Login</button>
                </div>

                <div className={styles.form}>
                    <Link to="/signup" style={{color:"#02B589" , textDecoration:"underline"}}>Click here if you'r new</Link>
                </div>

            </div>

        </div>
    )
}