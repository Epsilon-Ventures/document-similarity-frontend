import React from 'react';
import classes from './aboutstyle.module.css';

function AboutPage() {
  return (
    <div className={classes.aboutPage}>
      <div className={classes.mycontainer}>
        <div className={classes.paragraph_area}>
          <p className={classes.heading}>Question Similarity Detection</p>
          <div className={classes.abstractdiv}>
            <p className={classes.abstract_des}>
              The project aims to explore the effectiveness of using the
              sentence transformer model(SBERT) and vector database for
              performing question similarity analysis. The project involves
              building a vector database by training a sentence transformer
              model on a large corpus of text data. The vector dataset is then
              used to perform question similarity analysis by retrieving similar
              questions and similarity scores to a given search query. The model
              is trained on a large corpus of ALLNLI datasets, other paraphrase
              datasets such as MRPC, and PAWS, and the semantic similarity of
              datasets such as STS and finally adapted on 9,282 custom-prepared
              engineering datasets.
            </p>
            <p className={classes.abstract_des}>
              The sentence transformer model is trained using the aforementioned
              datasets with MNR Loss as the loss function. The effectiveness of
              the model is evaluated by using the STS test dataset and test set
              of the MRPC. The result of the project demonstrates that using a
              sentence transformer model and vector database for question
              similarity analysis outperforms the baseline method of keyword
              matching. The approach achieved a spearman correlation value of
              0.863 on the STS benchmark, an accuracy of 88.7% on the MRPC test.
              The Spearman correlation value in the SBERT paper for the
              NLI-large dataset was below 0.80. These values show that
              continuous training of the model on other datasets besides NLI
              helps to increase the performance and performs better for
              downstream tasks. This suggests that the use of the sentence
              transformer model and vector database is a promising approach for
              performing question similarity analysis, which could have
              significant implications for information retrieval systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
